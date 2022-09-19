const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "anayfiles",
  api_key: "116539871689481",
  api_secret: "rN9zGPIRaFyWOP1910DgjD5Zs0Y",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "folder name",
    format: async () => {
      "jpeg", "png", "jpg";
    },
    public_id: (req, file) => file.filename,
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter,
});

module.exports = upload;
