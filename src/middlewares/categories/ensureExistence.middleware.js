import AppError from "../../errors";
import database from "../../database";

export default async function ensureExistenceMiddleware(req, res, next) {
    try {
        const { id } = req.validatedData;
        const query = `SELECT * FROM categories WHERE id = $1`;
        const { rows } = await database.query(query, [id]);
        if (rows.length === 0) {
            throw new AppError('Category not found', 404);
        }
        return next();
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
    }
}