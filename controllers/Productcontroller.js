const { productmiddleware } = require("../middleware/productmiddleware")

exports.getproducts = (req,res) =>{
    res.status(200).json({
        message : true,
        products : 'here is the list of products'
    })
}

exports.getsingleproduct = (req,res) =>{
    //console.log(req.params.id);
    res.status(200).json({
        message : true,
        products : 'here is the product you querred',
        productid : req.params.id
    })
}

exports.updateproduct = (req,res) =>{
    //console.log(req.params.id);
    res.status(200).json({
        message : true,
        products : 'your product is updated',
        productid : req.params.id
    })
}

exports.deleteproduct = (req,res) =>{
    //console.log(req.params.id);
    res.status(200).json({
        message : true,
        products : 'your product is  deleted',
        productid : req.params.id
    })
}

exports.createproduct = (req,res) =>{
    res.status(200).json({
        message : true,
        products : 'your product is  created',
        product : req.body
    })
}

// creating error middle ware controller for testing

exports.errtesting = (req,res,next)=>{
    return next('err occured')
}