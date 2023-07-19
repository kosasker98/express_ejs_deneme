const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

const data = [
    { id: 1, name: "Kalem", price: 15,imgUrl:"Kalem.jpeg" },
    { id: 2, name: "Silgi", price: 5, imgUrl:"Silgi.jpeg"},
    { id: 3, name: "Defter", price: 25,imgUrl:"Defter.jpeg"}];

app.use("/products/:id", function (req, res) {
    const urun = data.find(u => u.id == req.params.id)
    
    res.render("product-details",urun);
});

app.use("/products", function (req, res) {
    res.render("products", {
        list: data

    });
});

app.use("/", function (req, res) {
    res.render("index");
});

app.listen(8080, () => {

    console.log("8080 dinleniyor");
});