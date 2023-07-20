const express = require("express");

const router = express.Router();
const db = require("../data/db")


router.use("/products/:id", async function (req, res) {

    try {

        const [products,] = await db.execute("select * from PRODUCTS")
        const urun = products.find(u => u.id == req.params.id)


        res.render("product-details", urun);
    } 
    catch (err) {
        console.log(err)

    }

});

router.use("/products", async function (req, res) {

    try {

        const [products,] = await db.execute("select * from PRODUCTS")
        res.render("products", {
            list: products
        });
    } catch (err) {
        console.log(err)

    }

});

router.use("/", function (req, res) {
    res.render("index");
});


module.exports = router;