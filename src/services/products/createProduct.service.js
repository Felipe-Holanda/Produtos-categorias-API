import database from '../../database';

export default async function createProductService(name, price, category) {
    const query = `INSERT INTO products (name, price, category_id) VALUES ($1, $2, $3) RETURNING *`;
    const { rows } = await database.query(query, [name, price, category]);
    return { status: 201, message: rows[0] }
}