const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  password: "password",
  database: "project_pos",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db connected");
  }
});

app.get("/product-men", (req, res) => {
  const qString = "Select * from product_jamtangan where gender = men";
  db.query(qString, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "query error",
      });
    }
    res.status(200).json({
      message: "data fetched",
      result: result,
    });
  });
});

app.get("/transaction", (req, res) => {
  const qString =
    "Select n.no_transaction from product_jamtangan p join (Select * from transaction_item i join transaction_header h on i.id_transaction_header = h.id_transaction_header) n on n.id_product=p.id order by no_transaction asc";

  db.query(qString, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "query error",
      });
    }
    res.status(200).json({
      message: "data fetched",
      result: result,
    });
  });
});

app.get("/product-all", (req, res) => {
  const qString = "Select * from product_jamtangan";
  db.query(qString, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "query error",
      });
    }
    res.status(200).json({
      message: "data fetched",
      result: result,
    });
  });
});

app.get("/filter", (req, res) => {
  console.log(req.query);
  const { order } = req.query;
  delete req.query.order;
  const arrQuery = Object.entries(req.query);

  let gender = arrQuery.filter((val) => {
    return val[0] === "men" || val[0] === "women" || val[0] === "unisex";
  });

  console.log(gender);

  const categories = arrQuery.filter((val) => {
    return val[0] !== "men" && val[0] !== "women" && val[0] !== "unisex";
  });

  console.log(categories);

  let where = "";

  /// start
  if (gender.length || categories.length) {
    where = " where (";

    if (gender.length) {
      gender = gender.filter((val) => {
        return val != undefined;
      });

      gender.map((val, idx) => {
        if (idx) {
          if (val) {
            where += `or gender = '${val[0]}' `;
          }
        } else {
          if (val) {
            where += ` gender = '${val[0]}' `;
          }
        }
      });
    }

    if (categories.length) {
      if (gender.length) {
        where += ") and (";
      }
      console.log(categories);
      categories.map((val, idx) => {
        idx
          ? (where += `or category = '${val[0]}' `)
          : (where += ` category = '${val[0]}' `);
      });
    }

    where += ")";
  }

  ///end

  qString =
    "Select * from product_jamtangan " + where + " order by name " + order;

  db.query(qString, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "query error",
      });
    }

    res.status(200).json({
      message: "data fetched",
      result: result,
    });
  });
});

app.get("/find", (req, res) => {
  console.log(req.query);
  let qString = "Select * from product_jamtangan ";

  qString = qString + " where name LIKE '%" + req.query.name + "%' ";

  console.log(qString);
  db.query(qString, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "query error",
      });
    }

    console.log(res.data);
    res.status(200).json({
      message: "data fetched",
      result: result,
    });
  });
});

app.listen(2000, () => {
  console.log("api is running");
});
