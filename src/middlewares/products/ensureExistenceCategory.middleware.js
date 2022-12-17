import AppError from "../../errors";
import database from "../../database";

export default async function ensureCategoryOnCreation(req, res, next) {
    try {
        const { category } = req.validatedData;
        const { rows } = await database.query(`SELECT * FROM categories WHERE id = $1;`, [category]);
        if (rows.length === 0) {
            throw new AppError("Selected category does not exist", 404);
        }
        return next();
    } catch (err) {
        return res.status(err.status).json({ message: err.message });
    }
}