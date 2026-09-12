const servcice = require("./../servcies/product.service");

const create = async(req, res, next)=>{
    try{
        const product = await servcice.createProduct(req.body);

        res.status(201).json({
            sucesss: true,
            data:product,
        });
    }
    catch(error){
        next(error);
    }
}

const getAll = async(req,res,next)=>{
    try {
        const products = await servcice.getProducts();
        res.status(200).json({
            sucess:true,
            data:products
        })
        
    } catch (error) {
        next(error);
    }
}

const getById = async(req,res,next)=>{
    try {
        const product = await servcice.getProduct(req.params.id);

        res.status(200).json({
            success:true,
            data:product
        })

    } catch (error) {
        next(error)
    }
}

const update = async(req,res,next)=>{
    try {
        const product =  await servcice.updateProduct(req.params.id, req.body);

        res.status(200).json({
            success:true,
            data:product,
        })
    } catch (error) {
        next(error);
    }
}

const remove = async(req,res, next)=>{
    try {
        await servcice.deleteProduct(req.params.id);
        res.status(204).send();

    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}