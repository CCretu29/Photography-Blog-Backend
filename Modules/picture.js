const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  imageUrl: {
    type: String,
    required: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  }
}, { timestamps: true });

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
