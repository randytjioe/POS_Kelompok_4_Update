const db = require("../models")
const fs = require("fs")
const path = require("path")

const Product = db.product
const Brand = db.brand
const Gender = db.gender
const {Op, ForeignKeyConstraintError} = require("sequelize")
const productController = {
    getProduct : async (req,res) => {
        try {
            const product = await Product.findAll({
                include:[
                    {
                        model:Brand,
                        as:"Brand"
                    },
                    {
                        model:Gender,
                        as:"Gender"
                    }
                ]
            })
            
            res.status(200).json({
                message : product,
                result:product
            })

        } catch (err) {
            res.status(400).json({
                message : err
            })
            console.log(err)
        }

    },
    addProduct : async (req,res) => {
        try {
            const {name,stock,harga,brand_id,gender_id} = req.body
            const image_url = process.env.render_image + req.file.filename
            const data = {name,stock,harga,brand_id,gender_id,image_url}
            console.log(data)
            const checkProduct = await Product.findOne({
                where : {
                    name : name 
                }
            })

            if (checkProduct) {
                return res.status(400).json({
                    message: "produk sudah tersedia"
                })
            }

            const addProduct = await Product.create({...data})
            res.status(200).json({
                message: "produk berhasil ditambahkan",
                result : addProduct
            })

        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
        }
    },
    getProductByName : async(req,res) =>{
        try {
            const name = req.query.name 
            const filterName = await Product.findAll({
                include:[
                {
                    model:Brand,
                    attributes:["name"],
                    as:"Brand"
                },
                {
                    model:Gender,
                    attributes:["name"],
                    as:"Gender"
                }
                ],
                where:{
                    name :{
                        [Op.like] : `%${name}%`
                    }
                }
            })
            res.status(200).json({
                message:"filter product berdasarkan nama",
                result:filterName
            })

        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
        }
    },
    getProductByBrand : async (req,res) => {
        try {
            const brand_id = req.body.brand_id;
            console.log(brand_id)
            const filterBrand = await Product.findAll({
                 include:[
                {
                    model:Brand,
                    attributes:["name"],
                    as:"Brand",
                    where :{
                       id:{[Op.in] : brand_id}
                    }
                },
                {
                    model:Gender,
                    attributes:["name"],
                    as:"Gender"
                }
                ],
              
            })

            res.status(200).json({
                message: "filter berdasarkan brand",
                result : filterBrand
            })
        } catch (err) {
            res.status(400).json({
                message: err
            })
            console.log(err)
        }

    },
    getProductByGender:async (req,res) =>{
        try {
            const gender_id = req.body.gender_id

            const filterGender = await Product.findAll({
                include : [
                    {
                        model:Brand,
                        attributes:["name"],
                        as:"Brand"
                    },
                    {
                        model:Gender,
                        attributes:["name"],
                        as:"Gender"
                    }
                ],
                where :{
                    gender_id:gender_id
                }
            })
            res.status(200).json({
                message:"filter berdasarkan gender",
                result:filterGender
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
        }
    },
    updateProduct : async (req,res) => {
        try {
            const {id,name,stock,harga,brand_id,gender_id} = req.body
            const data = {name,stock,harga,brand_id,gender_id}

          

            

            if (req.file) {
                const image_url = process.env.render_image + req.file.filename
                const checkProduct = await Product.findOne({
                    where:{
                        id:id
                    }
                })

                const file = checkProduct.image_url.split("/")[3]
                const path = path.dirname(`${__dirname}../public/IMAGE_PRODUCT`)
                await fs.unlink(path,file)

                const updateProduct = await Product.update({
                    ...data,
                    image_url
                })

                res.status(200).json({
                    message:"product updated",
                    result : updateProduct
                })
            }else{
                const updateProduct1 = Product.update({
                    ...data
                })
                res.status(200).json({
                    message:"product updated",
                    result:updateProduct1
                })
            }
            
        } catch (err) {
            
        }

    },
    sortProductNameAZZA: async (req,res) => {
        try {
            const sort = req.body.sort

            if(sort = "DESC"){
                const sortProduct = await Product.findAll({
                    include:[
                        {
                            model:Brand,
                            as:"Brand"
                        },
                        {
                            model:Gender,
                            as:"Gender"
                        }
                    ],
                    order:["name","DESC"]
                })
                return sortProduct
            }else if(sort = "ASC") {
                const sortProduct = await Product.findAll({
                    include:[
                        {
                            model:Brand,
                            as:"Brand"
                        },
                        {
                            model:Gender,
                            as:"Gender"
                        }
                    ],
                    order:["name","ASC"]
                })
                return sortProduct
            }

            res.status(200).json({
                message:"sort by name",
                result : sortProduct
            })
           
            
        } catch (err) {
            res.status(400).json({
                message:err
            })
        }
    },
    sortProductPriceLHHL : async (req,res) =>{
        try {
            const sort = req.body.sort
            if(sort = "DESC"){
                const sortProduct = await Product.findAll({
                    include:[
                        {
                            model:Brand,
                            as:"Brand"
                        },
                        {
                            model:Gender,
                            as:"Gender"
                        }
                    ],
                    order:["harga","DESC"]
                })
                return sortProduct
            }else if(sort = "ASC") {
                const sortProduct = await Product.findAll({
                    include:[
                        {
                            model:Brand,
                            as:"Brand"
                        },
                        {
                            model:Gender,
                            as:"Gender"
                        }
                    ],
                    order:["harga","ASC"]
                })
                return sortProduct
            }

            res.status(200).json({
                message:"sort by name",
                result : sortProduct
            })
        } catch (err) {
            res.status(400).json({
                message:err
            })
        }
    }
    
}

module.exports = productController;