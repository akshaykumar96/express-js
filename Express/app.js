var express= require("express");
var bodyParser = require("body-parser");
var productRouter =  require("./productrouter.js");
var app = express();

app.use(bodyParser());
app.use("/product",productRouter);

app.get("/",function(req,res)
{
 res.send("welcome to the express.js hero mein hero tera")
});


app.get("/list",function(req,res)
{
var obj ={id:100,name:"akshay"};
var jsonobj=JSON.stringify(obj);
res.send(jsonobj);
});

app.post("/forms",function(req,res)
{ 
    var body= req.body;
    console.log(req.body);
    res.send(req.body);
})

app.put("/putdata",function(req,res)
{
    console.log(req.body);
    res.send(req.body);   
})


app.listen(3000);