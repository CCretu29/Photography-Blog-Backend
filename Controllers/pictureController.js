const pictureService = require('../services/pictureService');

class PictureController {
  async uploadPicture(req, res) {
    try {
      const newPicture = await pictureService.uploadPicture(req.body, req.admin._id);
      res.status(201).json(newPicture);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deletePicture(req, res) {
    try {
      const deletedPicture = await pictureService.deletePicture(req.params.id);
      if (!deletedPicture) {
        return res.status(404).json({ message: 'Picture not found' });
      }
      res.status(200).json({ message: 'Picture deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllPictures(req, res) {
    try {
      const pictures = await pictureService.getAllPictures();
      res.status(200).json(pictures);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPictureById(req, res) {
    try {
      const picture = await pictureService.getPictureById(req.params.id);
      if (!picture) {
        return res.status(404).json({ message: 'Picture not found' });
      }
      res.status(200).json(picture);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new PictureController();
