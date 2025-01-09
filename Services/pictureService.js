const Picture = require('../modules/picture');

class PictureService {
  async uploadPicture(pictureData, adminId) {
    const picture = new Picture({
      ...pictureData,
      uploadedBy: adminId
    });
    return await picture.save();
  }

  async deletePicture(pictureId) {
    return await Picture.findByIdAndDelete(pictureId);
  }

  async getAllPictures() {
    return await Picture.find().populate('uploadedBy', 'username');
  }

  async getPictureById(pictureId) {
    return await Picture.findById(pictureId).populate('uploadedBy', 'username');
  }
}

module.exports = new PictureService();
