import database from "../../database";

export default async function editCategoryService(id, name) {
    const query = `UPDATE categories SET name = $1 WHERE id = $2 RETURNING *`;
    const { rows } = await database.query(query, [name, id]);
    return { status: 200, message: rows[0] }
}