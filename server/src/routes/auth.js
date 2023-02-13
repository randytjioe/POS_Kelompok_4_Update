const express = require("express")
const router = express.Router();

const {authController} = require("../controllers")

router.post("/v1",authController.login)
router.post("/v2",authController.register)
router.get("/keeplogin",authController.keeplogin)
module.exports = router;