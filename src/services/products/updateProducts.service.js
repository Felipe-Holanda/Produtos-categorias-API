import database from "../../database";

export default async function updateProductsService(id, name, price, category) {
    if (name && !price && !category) {
        const query = `UPDATE products SET name = $1 WHERE id = $2 RETURNING *`;
        const request = await database.query(query, [name, id]);
        return { status: 200, message: request.rows[0] };
    } else if (!name && price && !category) {
        const query = `UPDATE products SET price = $1 WHERE id = $2 RETURNING *`;
        const request = await database.query(query, [price, id]);
        return { status: 200, message: request.rows[0] };
    } else if (!name && !price && category) {
        const query = `UPDATE products SET category_id = $1 WHERE id = $2 RETURNING *`;
        const request = await database.query(query, [category, id]);
        return { status: 200, message: request.rows[0] };
    } else if (name && price && !category) {
        const query = `UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *`;
        const request = await database.query(query, [name, price, id]);
        return { status: 200, message: request.rows[0] };
    } else if (name && !price && category) {
        const query = `UPDATE products SET name = $1, category_id = $2 WHERE id = $3 RETURNING *`;
        const request = await database.query(query, [name, category, id]);
        return { status: 200, message: request.rows[0] };
    } else if (!name && price && category) {
        const query = `UPDATE products SET price = $1, category_id = $2 WHERE id = $3 RETURNING *`;
        const request = await database.query(query, [price, category, id]);
        return { status: 200, message: request.rows[0] };
    } else if (name && price && category) {
        const query = `UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *`;
        const request = await database.query(query, [name, price, category, id]);
        return { status: 200, message: request.rows[0] };
    } else {
        return { status: 400, message: "Invalid request" };
    }
}