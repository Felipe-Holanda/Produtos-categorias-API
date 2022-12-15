import database from "../../database";

export default async function getProductsCategoryService(id) {
    const query = `SELECT p.name, p.price, c.name AS category FROM categories c INNER JOIN products p ON c.id = p.category_id WHERE p.category_id=$1;`;
    const { rows } = await database.query(query, [id]);
    return { status: 200, message: rows }
}