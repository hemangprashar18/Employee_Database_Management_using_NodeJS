const Video = require('../models/videoModel');
const User = require('../models/userModel');

// function to upload a video
exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const videoUrl = `/uploads/videos/${req.file.filename}`;

    const newVideo = new Video({
      title,
      description,
      videoUrl,
      uploadedBy: userId,
    });

    await newVideo.save();

    res.status(201).json({
      message: 'Video uploaded successfully',
      video: newVideo,
    });
  } catch (error) {
    console.error('Error uploading video:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// to list videos of all the users
exports.listVideos = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const videos = await Video.find()
      .populate('uploadedBy', 'fullName photo')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalVideos = await Video.countDocuments();
    const hasMore = page * limit < totalVideos;

    res.status(200).json({
      videos,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        hasMore,
      },
    });
  } catch (error) {
    console.error('Error listing videos:', error);
    res.status(500).json({ error: error.message });
  }
};

// to get videos of the particular user
exports.getUserVideos = async (req, res) => {
  try {
    const videos = await Video.find({ uploadedBy: req.params.userId });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
