const express=require("express");
const { getAllProducts,createProduct, updateProduct,deleteProduct, getProductDetails, createProductReview, getProductReviews,deleteReview } = require("../controllers/productController");
const {isAutheticatedUser,authorizeRoles}=require("../middleware/auth");

const router=express.Router();

router.route("/products").get(isAutheticatedUser,authorizeRoles("admin"),getAllProducts);
router.route("/admin/products/new").post(isAutheticatedUser,authorizeRoles("admin"),createProduct);
router.route("/admin/product/:id").put(isAutheticatedUser,updateProduct).delete(isAutheticatedUser,deleteProduct,authorizeRoles("admin"));
router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAutheticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAutheticatedUser, deleteReview);

module.exports=router  