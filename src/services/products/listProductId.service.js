import database from "../../database";

export default async function listProductIdService(id) {
    const { rows } = await database.query(`SELECT * FROM products WHERE id = $1;`, [id]);
    return { status: 200, message: rows[0] }
}