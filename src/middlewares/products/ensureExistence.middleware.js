import AppError from "../../errors";
import database from "../../database";

export default async function ensureExistenceProducts(req, res, next) {
    try {
        const { id } = req.validatedData;
        const { rows } = await database.query(`SELECT * FROM products WHERE id = $1;`, [id]);
        if (rows.length === 0) {
            throw new AppError('Product not found', 404);
        }
        return next();
    } catch (err) {
        return res.status(err.status).json({ message: err.message });
    }
}