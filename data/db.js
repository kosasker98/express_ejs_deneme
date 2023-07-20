const mysql = require("mysql2");
const config = require("../config");
const { connect } = require("mssql");
let con = mysql.createConnection(config.db);

con.connect(function(err) {
    if(err){
        console.log(err);
    }
    else

    con.query("select * from PRODUCTS",function(err,result){

console.log(result)

    });

    console.log("bağlantı başarılı");
});

module.exports = con.promise();