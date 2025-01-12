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
  price: {
    type: Number,
    required: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: async function(value) {
        const User = mongoose.model('User');
        const user = await User.findById(value);
        return user && user.isAdmin === true;
      },
      message: 'Only admin users can upload pictures.'
    }
  },
  purchasedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
