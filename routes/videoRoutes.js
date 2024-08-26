const express = require('express');
const { uploadVideo, listVideos, getUserVideos } = require('../controllers/videoController');
const { uploadVideoMiddleware } = require('../middlewares/upload');

const router = express.Router();

router.post('/upload', uploadVideoMiddleware, uploadVideo);
router.get('/list', listVideos);
router.get('/:userId', getUserVideos);

module.exports = router;
