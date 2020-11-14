'use strict'

const express = require('express')
const multer = require('multer')
const fileType = require('file-type')
const fs = require('fs')
const app = express()
const router = express.Router()

const port = process.env.PORT || 8090;


let multerConfig = {
    dest: 'uploads/', // Normal file upload destination path
    limits: {
        fileSize: 100 * 1024 * 1024, // Max file size in bytes (10 MB)
        files: 1 //上传数量
    },
    fileFilter: function (req, file, cb) {
        var mimetypes = (['text/*', 'image/*', 'video/*', 'audio/*', 'application/zip']).join(',');
        // console.log(file.mimetype)
        var testItems = file.mimetype.split('/');
        if ((new RegExp('\\b' + testItems[0] + '/\\*', 'i')).test(mimetypes) || (new RegExp('\\*/' + testItems[1] + '\\b', 'i')).test(mimetypes) || (new RegExp('\\b' + testItems[0] + '/' + testItems[1] + '\\b', 'i')).test(mimetypes)) {
            cb(null, true);
        } else {
            return cb(new Error('Only image, plain text, audio, video and zip format files are allowed!'), false);
        }
    } // fileFilter要在这里声明才行，用instance.fileFilter = funciton(){};是不管用的
};
 
//single是指前端指定的用来保存文件内容的字段
//除了single还有fields, array方法，是用来处理多文件上传的
var upload = multer(multerConfig).single('uploadFiles');

 
router.post('/uploads', (req, res) => {

    //**在这个时候req.file才出现**（如果不是用的single方法，那么此时req.files出现），同时title和description也被添加到req.body中
    upload(req, res, function (err) {

        if (err) {

            res.status(400).json({
                message: err.message
            })

        } else {

            let path = `/downloads/${req.file.filename}`
            res.status(200).json({
                message: 'File Uploaded Successfully !',
                path: path
            })
        }
    })
})

router.get('/downloads/:filename', (req, res) => {

    let filename = req.params.filename
    let filepath = __dirname + "/uploads/" + filename
    let fileObj = fs.readFileSync(filepath)
    let mime = fileType(fileObj).mime
    // console.log(mime)
    res.writeHead(200, {
        'Content-Type': mime
    })
    res.end(fileObj, 'binary')
})


app.use('/', router)

app.use((err, req, res, next) => {

    if (err.code == 'ENOENT') {

        res.status(404).json({
            message: 'File Not Found !'
        })

    } else {

        res.status(500).json({
            message: err.message
        })
    }
})


app.listen(port)
console.log(`App Runs on ${port}`)

//https://www.learn2crack.com/2017/08/node-js-server-upload-images.html