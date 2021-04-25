const multer = require('multer')

module.exports = multer({
    storage : multer.memoryStorage(),
    fileFilter:(req, file, cb)=>{
        if(!file.mimetype.match(/vnd.openxmlformats-officedocument.wordprocessingml.document|jpe|jpeg|png|gif$i/)) {
            cb(new Error('file is not supported'),false)
            return
        }
        cb(null ,true)
    },
})  