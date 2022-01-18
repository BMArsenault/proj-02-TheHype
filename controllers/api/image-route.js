// const express = require('express');
// const req = require('express/lib/request');
// const router = require('express').Router();
// const multer = require('multer');
// // const withAuth = require('../../utils/auth');
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './public/uploads')
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({ storage: storage })
// router.use('/uploads', express.static('uploads'));


// router.post('/profile-upload-single', upload.single('profile-file'), function(req, res, next) {
//     // req.file is the `profile-file` file
//     // req.body will hold the text fields, if there were any
//     console.log(JSON.stringify(req.file))
//     console.log(req.body, "this is the body");
//     var response = '<a href="/">Home</a><br>'
//     response += "Files uploaded successfully.<br>"
//         // response += `<img src="${req.file.path}" /><br>`
//         // req.file.path = req.file.path.substring(7);
//         // return res.render('post-info', { info: req.file.path.replace(/\\/g, "/") })
//         // return res.send(response)
// })

// module.exports = router;