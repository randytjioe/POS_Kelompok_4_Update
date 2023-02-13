const db  = require ("../models")
const Gender = db.gender

const genderController = {
    getGender : async (req,res) =>{
        try {
            const gender = await Gender.findAll()
            res.status(200).json({
                message:"gender fetched",
                result : gender

            })
        } catch (err) {
            res.status(400).json({
                message : err
            })
        }

    },
    addGender : async (req,res) => {
        try {
            const name = req.body.name

            const checkGender = await Gender.findOne({
                where : {
                    name : name 
                }
            })
            
            if (checkGender) {
                return res.status(400).json({
                    message:"Gender telah tersedia"
                })
            }

            const addGender = await Gender.create({name:name})
            res.status(200).json({
                message : "Gender berhasil ditambahkan",
                result : addGender
            })
        } catch (err) {
            res.status(400).json({
                message:err
            })
        }

    },
    updateGender : async(req,res) => {
        
    }
}

module.exports = genderController;