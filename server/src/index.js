
const express = require("express");
const app=express();
app.use(express.json());
const mysql = require("mysql2");
const cors=require('cors');
app.use(cors())
const options = {
    origin: 'http://localhost:3000',
    }
    app.use(cors(options))


const db=mysql.createConnection({
    host :"localhost",
    port:3306,
    user:"root",

    password :"password",
    database:"project_pos",
});

db.connect((err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("db connected");
    }
})

app.get("/product-men",(req,res)=>{
    const qString = "Select * from product_jamtangan where gender = men";
    db.query(qString,(err,result)=>{
        if (err){
            res.status(400).json({
                message:"query error",
            });
        }
        res.status(200).json({
            message:"data fetched",
            result:result,
        })
    })
})

app.get("/product-all",(req,res)=>{
    const qString = "Select * from product_jamtangan";
    db.query(qString,(err,result)=>{
        if (err){
            res.status(400).json({
                message:"query error",
            });
        }
        res.status(200).json({
            message:"data fetched",
            result:result,
        })
    })
})


app.get("/filter",(req,res)=>{

    console.log(req.query)

    let where = " ("
    req.query.men ? where += " gender = 'men' " : where +=    " gender != 'men' ";
    req.query.women ? where += " or gender = 'women' " : where +=    "or gender != 'women' ";

    where += ") and ("
    delete req.query.men
    delete req.query.women

 

   const arrWhere = Object.entries(req.query)

    console.log(arrWhere);
    arrWhere.map((val,idx)=>{
        idx?
             where += `or category = '${val[0]}' `
             :
             where += ` category = '${val[0]}' `

    })

    where += ")"



    let qString = "Select * from product_jamtangan ";
    if(where) {
        qString = qString + " where " + where
    }

    console.log(qString);
    db.query(qString,(err,result)=>{
        if (err){
            res.status(400).json({
                message:"query error",
            });
        }

        console.log(res.data);
        res.status(200).json({
            message:"data fetched",
            result:result,
        })
    })
})



app.listen(2000,()=>{
    console.log("api is running");
})