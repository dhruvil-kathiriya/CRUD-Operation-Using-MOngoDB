const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');
// const imagePath = '/uploads/postImage';

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});


const Post = mongoose.model('post', PostSchema);

module.exports = Post;