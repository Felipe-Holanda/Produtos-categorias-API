import database from "../../database";

export default async function createCategoryService(name) {
    const query = `INSERT INTO categories (name) VALUES ($1) RETURNING *`;
    const { rows } = await database.query(query, [name]);
    return { status: 201, message: rows[0] }
}