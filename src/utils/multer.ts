const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
var storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'admin',
    allowedFormats: ['jpg,png'],
    filename: (req: any, res: any, cb: any) => {
        cb(null, req.file.originalname, Date.now())
    }
});
const filefilter = (req: any, file: any, next: any) => {
    next(null, true);
}
var upload = multer({
    storage: storage,
    fileFilter: filefilter
});
export = upload;

