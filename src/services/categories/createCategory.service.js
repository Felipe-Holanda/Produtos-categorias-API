import database from '../../database';

export default async function createCategory(name) {
    const query = `INSERT INTO categories (name) VALUES ('${name}') RETURNING *`;
    const { rows } = await database.query(query);
    return { status: 201, message: rows[0] }
}