import database from '../../database';

export default async function listProductsService() {
    const request = await database.query(`SELECT * FROM products;`);
    return { status: 200, message: request.rows }
}