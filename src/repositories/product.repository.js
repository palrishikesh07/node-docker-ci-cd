const db = require("./../config/db");

const create  = async(product)=>{
    const [result] = await db.execute(
        `
        INSERT INTO products
        (name,description, price, stock)
        VALUES(?,?,?,?)
        `,
        [
            product.name,
            product.description,
            product.price,
            product.stock
        ]
    )
    return getById(result.insertId);
}

const getAll = async()=>{
    const [rows] = await db.execute(
        "SELECT * FROM products ORDER BY id DESC"
    )
    return rows;
}

const getById = async (id)=>{
    const [rows] = await db.execute(
        "SELECT * FROM products WHERE id=?",
        [id]
    )

    return rows[0];
}

const update = async(id,product)=>{
    await db.execute(
        `
        UPDATE products
        SET name =?, description =?, price=?, stock=? 
        WHERE id=?
        `,
        [
            product.name,
            product.description,
            product.price,
            product.stock,
            id
        ]
    )

    return getById(id);
}

const remove = async(id)=>{
    const [result] = await db.execute(
        "DELETE FROM products WHERE id=?",
        [id]
    );

    return result.affectedRows > 0;
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}