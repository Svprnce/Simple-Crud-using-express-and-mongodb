exports.productmiddleware = (err,req,res,next)=>{
    console.log('error firred',err);
    res.status(500).json({
        error : true
    })
    next()
}
