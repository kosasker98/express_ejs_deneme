var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res) => {

if (req.url == "/") {
    fs.readFile("index.html", (err,html) => {

        res.write(html);
        res.end();

    });
}
else if (req.url == "/urunler") {
    fs.readFile("urunler.html", (err,html) => {

        res.write(html);
        res.end();

    });
}
else {
fs.readFile("404.html",(err,html) => {

    res.write(html);   
    res.end();

});}

});

server.listen(8080, () => {

    console.log("server devrede ");
    console.log(8+2);
    console.log(5);
    console.log(5);

});