const express = require('express');
const { getUserProfile, addUserBio } = require('../controllers/userController');
const { uploadPhoto } = require('../controllers/photoController');
const { uploadPhotoMiddleware } = require('../middlewares/upload');

const router = express.Router();

router.get('/:id', getUserProfile);
router.post('/:id/bio', addUserBio);
router.post('/:id/photo',uploadPhotoMiddleware,uploadPhoto);

module.exports = router;
