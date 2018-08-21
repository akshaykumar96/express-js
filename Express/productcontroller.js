var Product = require("./productmodel.js");
let Products=[
    new Product(10,"sample",10,10),
    new Product(20,"sample2",20,20)

];

module.exports.getProducts= function(req,res){
    res.send(Products);
}
