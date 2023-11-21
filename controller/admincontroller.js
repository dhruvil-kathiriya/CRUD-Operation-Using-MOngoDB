const Student = require("../models/Student")
const fs = require('fs');
const path = require('path');


module.exports.addData = (req, res) => {
    return res.render('Add_data');
};

module.exports.addStudentDetails = async function (req, res) {
    var imagePath = "";
    if (req.file) {
        imagePath = Student.imgModel + "/" + req.file.filename;
    }
    req.body.adminImage = imagePath;
    await Student.create(req.body);
    return res.redirect("/");
}

module.exports.delteStudentDetails = async function (req, res) {
    let oldData = await Student.findById(req.params.id);
    if (oldData) {
        let fullpath = path.join(__dirname, '..', oldData.adminImage);
        await fs.unlinkSync(fullpath);
    }

    await Student.findByIdAndDelete(req.params.id);
    return res.redirect('back');
}

module.exports.updateStudentDetails = async function (req, res) {
    let record = await Student.findById(req.params.id);
    return res.render('Edit_data', {
        oldStu: record
    });
}

module.exports.EditStudent = async function (req, res) {
    let oldData = await Student.findById(req.body.EditId);
    if (req.file) {
        if (oldData.adminImage) {
            let fullpath = path.join(__dirname, '..', oldData.adminImage);
            await fs.unlinkSync(fullpath);
        }
        var imagePath = '';
        imagePath = Student.imgModel + "/" + req.file.filename;
        req.body.adminImage = imagePath;
    }
    else {
        req.body.adminImage = oldData.adminImage;
    }
    await Student.findByIdAndUpdate(req.body.EditId, req.body)
    return res.redirect('View_data');
}

module.exports.View_data = async function (req, res) {
    let data = await Student.find({});
    return res.render('View_data', {
        stData: data
    })
}

