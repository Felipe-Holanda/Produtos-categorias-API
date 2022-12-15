import database from "../../database";

export default async function deleteCategoryService(id) {
    const query = `DELETE FROM categories WHERE id = $1 RETURNING *`;
    const { rows } = await database.query(query, [id]);
    return { status: 204 }
}