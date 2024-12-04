// const express = require('express');
// const { uploadVideo, listVideos, getUserVideos } = require('../controllers/videoController');
// const { uploadVideoMiddleware } = require('../middlewares/upload');

import express from 'express';
import { uploadVideo, listVideos, getUserVideos } from '../controllers/videoController';
import { uploadVideoMiddleware } from '../middlewares/upload';

const router = express.Router();

router.post('/upload', uploadVideoMiddleware, uploadVideo);
router.get('/list', listVideos);
router.get('/:userId', getUserVideos);

module.exports = router;
