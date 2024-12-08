/** @format */

const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const {cloudinaryConfig, jwtSecret} = require('../../config');
const cloudinary = require('cloudinary').v2;
cloudinary.config(cloudinaryConfig);
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'img',
  allowedFormats: ['jpg', 'png', 'jepg'],
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Lỗi upload'), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: multerFilter,
});
module.exports = upload;
