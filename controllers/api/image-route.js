const path = require('path');
const express = require('express');
const router = require('express').Router();
const multer = require('multer');
// const withAuth = require('../../utils/auth');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
router.use(express.static(path.join(__dirname, 'uploads')));
router.post('/profile-upload-single', upload.single('profile-file'), function(req, res, next) {
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.file))
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    response += `<img src="${req.file.path}" /><br>`
    return res.send(response)
})

module.exports = router;