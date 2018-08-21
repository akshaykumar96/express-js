var express= require("express");
var router = express.Router();
var productController= require("./productcontroller");

router.get("/",productController.getProducts)
router.get("/:id",function(req,res,next)
{
    res.send("from productRouter with Id  parameter");
});
router.post("/",function(req,res,next)
{   

    res.send(" Post method");
});

// router.use("/", function(req,res,next,err)
// {
    
// })
module.exports= router;