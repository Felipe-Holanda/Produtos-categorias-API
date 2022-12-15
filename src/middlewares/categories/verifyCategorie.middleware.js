import database from '../../database'
import AppError from '../../errors'

export default async function verifyCategory(req, res, next) {
    try {
        const { name } = req.body;
        const query = `SELECT * FROM categories WHERE name ILIKE '%${name}%'`;
        const { rows } = await database.query(query);
        if (rows.length > 0) {
            throw new AppError('Category already exists', 409);
        }
        return next();
    } catch (err) {
        return res.status(err.status).json({ error: err.message });
    }
}