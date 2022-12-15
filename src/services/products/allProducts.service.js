import database from '../../database';

export default async function allProductsService() {
    const query = `SELECT * FROM products`;
    const { rows } = await database.query(query);
    return { status: 200, message: rows }
}