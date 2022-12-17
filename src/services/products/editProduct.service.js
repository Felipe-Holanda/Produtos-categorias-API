import database from "../../database";

export default async function editProductService(id, name, price, category) {
    let query = `UPDATE products SET `;
    let data = { name, price, category_id: category }
    let params = [];
    let count = 1;
    for (let key in data) {
        if (data[key]) {
            query += `${key} = $${count}, `
            params.push(data[key]);
            count++;
        }
    }
    query = query.slice(0, -2);
    query += ` WHERE id = $${count} RETURNING *;`;
    params.push(id);
    const request = await database.query(query, params);
    return { status: 200, message: request.rows[0] }
}