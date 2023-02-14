const express = require("express");
const router = express.Router();

const { transController } = require("../controllers");

router.get("/v1", transController.getTransaction);
router.post("/v2", transController.addTranscation);
router.post("/filterbydate", transController.filterByDateRange);

module.exports = router;
