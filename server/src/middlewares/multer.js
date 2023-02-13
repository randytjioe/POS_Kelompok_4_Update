const multer = require("multer");
const {nanoid} = require("nanoid");

const fileUploader = ({
    destinationFolder = "",
    prefix = "POST",
    fileType = "image"
}) =>{
    const storageConfig = multer.diskStorage({
        destination:(req,file,cb) => {
            cb(null,`${__dirname}/../public/${destinationFolder}`)
        },
        filename:(req,file,cb) => {
            const fileExtension = file.mimetype.split("/")[1]
            const fileName = `${prefix}_${nanoid()}.${fileExtension}`
            cb(null,fileName)
        }
    })
    
    const uploader = multer({
        storage:storageConfig,
        fileFilter:(req,file,cb) => {
            if(file.mimetype.split("/")[0] != fileType) {
                return cb(null,false)
            }
            cb(null,true)
        }
       
    })

    return uploader

}
module.exports ={fileUploader}