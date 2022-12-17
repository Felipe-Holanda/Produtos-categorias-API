import AppError from '../../errors';
import database from '../../database';

export default async function ensureUniqueMiddleware(req, res, next) {
    try {
        const { name } = req.validatedData;
        const query = `SELECT * FROM categories WHERE name = $1`;
        const { rows } = await database.query(query, [name]);
        if (rows.length) {
            throw new AppError('Category already exists', 400);
        }
        return next();
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
    }
}