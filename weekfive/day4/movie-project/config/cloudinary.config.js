// Require Packages
// Cloudinary - Cloud Service that ables a developer to store images in a Cloud Db
const cloudinary = require('cloudinary').v2;

// A multer storage that connects to Cloudinary
const {CloudinaryStorage} = require('multer-storage-cloudinary');

// Multer - it's a middleware that handles uploaded files
const multer = require('multer');


// Cloudinary Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET    
})

// Storage Configuration of Cloudinary

const storage = new CloudinaryStorage({
    cloudinary, 
    params: {
        allowed_formats: ['jpg', 'png', 'jpeg'], 
        folder: 'movie-project' // store inside a folder 'movie-project' on Cloudinary
    }
});

// Exporting Cloudinary Configuration
module.exports = multer({storage});