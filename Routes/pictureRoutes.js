const express = require('express');
const router = express.Router();
const pictureController = require('../Controllers/pictureController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');

// Admin routes
router.post('/', adminAuthMiddleware, pictureController.uploadPicture);
router.post('/many', adminAuthMiddleware, pictureController.uploadManyPictures);
router.delete('/:id', adminAuthMiddleware, pictureController.deletePicture);

// User routes
router.get('/download/:id', userAuthMiddleware, pictureController.downloadPicture);
router.post('/buy/:id', userAuthMiddleware, pictureController.buyPicture);

// Public routes
router.get('/', pictureController.getAllPictures);
router.get('/:id', pictureController.getPictureById);

module.exports = router;
