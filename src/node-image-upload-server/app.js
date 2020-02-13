'use strict'

const express = require('express')
const multer = require('multer')
const fileType = require('file-type')
const fs = require('fs')
const app = express()
const router = express.Router()

const port = process.env.PORT || 8090;

const upload = multer({
    dest: 'images/',
    limits: { fileSize: 10000000, files: 1 },
    fileFilter: (req, file, callback) => {

        if (!file.originalname.match(/\.(jpg|jpeg)$/)) {

            return callback(new Error('Only Images are allowed !'), false)
        }

        callback(null, true);
    }
}).single('image')

router.post('/images/upload', (req, res) => {

    upload(req, res, function (err) {

        if (err) {

            res.status(400).json({ message: err.message })

        } else {

            let path = `/images/${req.file.filename}`
            res.status(200).json({ message: 'Image Uploaded Successfully !', path: path })
        }
    })
})

router.get('/images/:imagename', (req, res) => {

    let imagename = req.params.imagename
    let imagepath = __dirname + "/images/" + imagename
    let image = fs.readFileSync(imagepath)
    let mime = fileType(image).mime

    res.writeHead(200, { 'Content-Type': mime })
    res.end(image, 'binary')
})


app.use('/', router)

app.use((err, req, res, next) => {

    if (err.code == 'ENOENT') {

        res.status(404).json({ message: 'Image Not Found !' })

    } else {

        res.status(500).json({ message: err.message })
    }
})


app.listen(port)
console.log(`App Runs on ${port}`)

//https://www.learn2crack.com/2017/08/node-js-server-upload-images.html