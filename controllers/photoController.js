const Photo = require('../models/photoModel');
const User = require('../models/userModel');

exports.uploadPhoto = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const photoUrl = `/uploads/photos/${req.file.filename}`;

    const newPhoto = new Photo({
      photoUrl,
      uploadedBy: userId,
    });

    await newPhoto.save();

    res.status(201).json({
      message: 'Photo uploaded successfully',
      photo: newPhoto,
    });
  } catch (error) {
    console.error('Error uploading photo:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
