const express = require('express');
const router = express.Router();
const pictureController = require('../Controllers/pictureController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

router.post('/', adminAuthMiddleware, pictureController.uploadPicture);
router.delete('/:id', adminAuthMiddleware, pictureController.deletePicture);
router.get('/', pictureController.getAllPictures);
router.get('/:id', pictureController.getPictureById);

module.exports = router;
