const express = require('express');

const routes = express.Router();

const admincontroller = require('../controller/admincontroller');
const Student = require('../models/Student');

routes.get('/', admincontroller.addData);

routes.post("/addStudentDetails", Student.uploadImage, admincontroller.addStudentDetails)

routes.get("/delteStudentDetails/:id", admincontroller.delteStudentDetails);

routes.get("/updateStudentDetails/:id", admincontroller.updateStudentDetails);

routes.post("/EditStudent", Student.uploadImage, admincontroller.EditStudent);

routes.get("/View_data", admincontroller.View_data);

module.exports = routes;