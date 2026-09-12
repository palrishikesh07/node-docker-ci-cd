const repository = require("./../repositories/product.repository");

const createProduct = async(data)=>{
    return repository.create(data);
}

const getProducts = async()=>{
    return repository.getAll();
}
const getProduct = async(id)=>{
    const product = await repository.getById(id);

    if(!product){
        const error = new Error("Product not found");
        error.statusCode = 404;
        throw error;
    }
    
    return product;
}

const updateProduct = async(id,data)=>{
    await getProduct(id);

    return repository.update(id,data);
}

const deleteProduct = async(id)=>{
    await getProduct(id);
    await repository.remove(id);
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}