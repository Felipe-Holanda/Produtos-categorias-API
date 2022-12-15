import database from "../../database";

export default async function listAllCategories() {
    const query = `SELECT * FROM categories`;
    const { rows } = await database.query(query);
    return { status: 200, message: rows };
}