const express = require("express");
const router = express.Router();
const multer = require("multer")

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/home/abc/Documents/MYmember_sveltose_backend/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

// router.get("/product/:productId", read);
// router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    "/product/:productId/:userId",upload.single("photo"),
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.post("/product/add_products/:userId",requireSignin, isAuth, isAdmin,upload.single("photo"),create)
router.param("userId", userById);
router.param("productId", productById);
router.get("/products", list);
router.get("/product/product_list/:productId",read)



router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);


module.exports = router;
