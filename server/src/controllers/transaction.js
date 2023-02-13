const { Op } = require("sequelize");
const { sequelize } = require("../models");
const moment = require("moment")
const db = require("../models")
const Trans_Item = db.trans_item;
const Trans_Header = db.trans_header;
const Product = db.product;
const Brand = db.brand
const Gender = db.gender
const User = db.user
const transController = {
    getTransaction : async (req,res) => {
        try {
            const trans = await Trans_Item.findAll({
                include:[
                    {
                        model:Product,
                        attributes:["name","stock","harga","image_url"],
                        as:"Product",
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
                        ]
                    },
                    {
                        model:Trans_Header,
                        attributes:["no_trans","total","tgl"],
                        as:"Trans_Header",
                        include:{
                            model:User,
                            attributes:["username","name","email","isadmin"],
                            as:"User"
                        }
                    }
                ]
            })

            res.status(200).json({
                message:"transaction fetched",
                result : trans
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message:err
            })
            
        }
    },
    addTranscation : async(req,res) =>{
        const t = await sequelize.transaction();
        try {
            const tgl = moment().format("YYYYMMDD")
            const countHeader = await Trans_Header.count()
            const noTrans =`TRS-${tgl}000${countHeader+1}`
            const {user_id,qty,harga,total,product_id} = req.body

            const addHeader = await Trans_Header.create({
                no_trans : noTrans,
                total : total,
                tgl : tgl,
                user_id : user_id

            })

            const id = addHeader.dataValues.id
            const dataItem = {
                qty : qty,
                harga : harga,
                trans_header_id : id,
                product_id:product_id
            }
            const addItems = await Trans_Item.bulkCreate([dataItem])

            await t.commit();
            res.status(200).json({
                message : "transaction successfull",
                result : addItems
            })
        } catch (error) {
            await t.rollback();
            res.status(400).json({
                message:error
            })
        }
    },
    filterByDateRange : async(req,res)=>{
        try {
            const {dateFrom,dateTo} = req.body
            console.log(req.body)
            const filterByDateRange = await Trans_Item.findAll({
                include:[
                    {
                        model:Product,
                        attributes:["name","image_url"],
                        as:"Product",
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
                        ]
                    },
                    {
                        model:Trans_Header,
                        attributes:["no_trans","total","tgl"],
                        as:"Trans_Header",
                        include:[
                            {model:User,
                             attributes:["name"],
                             as:"User"   
                            }
                        ],
                        where:{
                            tgl:{[Op.between] :[dateFrom,dateTo]}
                        }
                    }
                ]
            })

            res.status(200).json({
                message:"transaction filter by date",
                result:filterByDateRange
            })
        } catch (err) {
            console.log(err)    
            res.status(400).json({
                message:err
            })
        }
    },

}
module.exports = transController;