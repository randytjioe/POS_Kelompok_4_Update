const db = require("../models")
const Brand = db.brand;

const brandController  = {
    getBrand : async (req,res) => { 
        try {
            const brand = await Brand.findAll()
            res.status(200).json({
                message :"brand fetched",
                result : brand
            })

        } catch (err) {
            res.status(400).json({
                message :err
            })
        }

    },
    addBrand : async (req,res) => {
            try {
                const name = req.body.name;

                const checkBrand = await Brand.findOne({
                    where: {
                        name : name
                    }
                })
                if (checkBrand) {
                    return res.status(400).json({
                        message : "brand sudah tersedia"
                    })
                }

                const addBrand = await Brand.create({name:name})
                res.status(200).json({
                    message:"brand berhasil ditambahkan",
                    result : addBrand

                })

            } catch (err) {
                res.status(200).json({
                    message:err
                })
            }
    },
    updateBrand : async(req,res) => {
        
    }
}

module.exports = brandController;