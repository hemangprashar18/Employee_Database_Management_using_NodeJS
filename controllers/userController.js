const User = require('../models/userModel');

// function to get the profile of that particular user
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
     return res.status(404).json({ message: 'User not found' });
    }  

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// function to add bio of that particular user
exports.addUserBio = async (req, res) => {
  try {
    const { bio } = req.body;
    if (bio.length > 500) {
      return res.status(400).json({ message: 'Bio exceeds 500 characters' });
    }
    const user = await User.findByIdAndUpdate(req.params.id, { bio }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
