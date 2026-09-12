const Joi = require("joi");

const productSchema = Joi.object({
    name:Joi.string().trim().min(2).max(255).required(),
    description: Joi.string().max(2000).allow(""),
    price: Joi.number().positive.required(),
    stock: Joi.number().integer().min(0).required(),
})

const validateProduct = (req,res,next)=>{
    const {error, value}=productSchema.validate(req.body);

    if(error){
        return res.status(400).json({
            sucess:false,
            error:error.details[0].message,
        })
    }

    req.body = value;
    next();

}

module.exports = validateProduct;