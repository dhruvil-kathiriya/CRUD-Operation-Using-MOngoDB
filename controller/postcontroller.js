const Post = require('../models/post');

const path = require('path');
const { post } = require('../routes');


module.exports.addPost = (req, res) => {
    return res.render('addPostData');
}

module.exports.addPostData = async (req, res) => {
    await Post.create(req.body);
    return res.redirect("back");
}

module.exports.viewPostData = async (req, res) => {
    let data = await Post.find({});
    return res.render('viewPostData', {
        psData: data
    })
}

module.exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    return res.redirect('back');
}

module.exports.updatePost = async (req, res) => {
    let record = await Post.findById(req.params.id);
    return res.render('editPostdata', {
        oldPost: record
    });
}              