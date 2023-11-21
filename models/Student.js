const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const imagePath = '/uploads';

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hobby: {
        type: Array,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    adminImage: {
        type: String,
        required: true
    }
});

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", imagePath));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now());
    }
});

StudentSchema.statics.uploadImage = multer({ storage: imageStorage }).single("adminImage");

StudentSchema.statics.imgModel = imagePath;

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;