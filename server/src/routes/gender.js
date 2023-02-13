const express = require("express")
const router = express.Router()

const {genderController} = require("../controllers")

router.get("/v1",genderController.getGender)
router.post("/v2",genderController.addGender)


module.exports = router;