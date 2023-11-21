const express = require('express');

const routes = express.Router();

const postcontroller = require("../controller/postcontroller");

const Post = require('../models/post')

routes.get('/', postcontroller.addPost);

routes.post("/addPostData", postcontroller.addPostData);

routes.get('/viewPostData', postcontroller.viewPostData)

routes.get('/deletePost/:id', postcontroller.deletePost);

routes.get('/updatePost/:id', postcontroller.updatePost)

module.exports = routes;