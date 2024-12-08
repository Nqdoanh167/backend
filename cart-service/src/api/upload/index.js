/** @format */
const {Router} = require('express');
const router = new Router();
const upload = require('./controller');
router.post('/', upload.single('image'), (req, res) => {
  console.log('req.file', req.file);
  if (!req.file) {
    return res.status(400).send({message: 'Please upload an image file.'});
  }
  res.status(200).send({
    message: 'Image uploaded successfully!',
    url: req.file.path,
  });
});

router.post('/multiple', upload.array('images', 10), (req, res) => {
  console.log('req.files', req.files);
  if (!req.files) {
    return res.status(400).send({message: 'Please upload an image file.'});
  }
  res.status(200).send({
    message: 'Images uploaded successfully!',
    urls: req.files.map((file) => file.path),
  });
});

module.exports = router;
