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

  async buyPicture(pictureId, userId) {
    const picture = await Picture.findById(pictureId);
    if (!picture) {
      throw new Error('Picture not found');
    }
    picture.purchasedBy.push(userId);
    return await picture.save();
  }
}

module.exports = new PictureService();
