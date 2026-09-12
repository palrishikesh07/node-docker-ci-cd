const errorHandler=(err,req,res,next)=>{
    console.error(err);

    const statusCode = err.statusCode || 500; // If null or undefined

    res.status(statusCode).json({
        sucess:false,
        error:{
            message: statusCode === 500 ? "Internal server error" : err.message
        }
    })
}


module.exports = errorHandler;


