import database from "../../database";

export default async function createProductsService(name, price) {
    const query = `INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *`;
    const { rows } = await database.query(query, [name, price]);
    return { status: 201, message: rows[0] }
}