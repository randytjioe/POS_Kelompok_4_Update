const express = require("express")
const router = express.Router()

const {brandController} = require("../controllers")

router.get("/v1",brandController.getBrand)
router.post("/v2",brandController.addBrand)


module.exports = router;