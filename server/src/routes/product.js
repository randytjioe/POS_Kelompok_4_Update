const express = require("express")
const router = express.Router();

const {fileUploader} = require("../middlewares/multer")
const {productController} = require("../controllers")

router.get("/v1",productController.getProduct)
router.post("/v2",fileUploader({
    destinationFolder:"IMAGE_PRODUCT",
    fileType:"image",
    prefix:"POST"
}).single("image"),productController.addProduct)
router.patch("/v3",fileUploader({
    destinationFolder:"IMAGE_PRODUCT",
    fileType:"image",
    prefix:"POST"
}).single("image"),productController.updateProduct)
router.get("/name",productController.getProductByName)
router.post("/brand", productController.getProductByBrand)
router.post("/gender", productController.getProductByGender)
router.post("/sortprice",productController.sortProductPriceLHHL)
router.post("/sortname",productController.sortProductNameAZZA)
module.exports = router;