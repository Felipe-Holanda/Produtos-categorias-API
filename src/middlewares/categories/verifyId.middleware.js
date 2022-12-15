import database from "../../database";
import AppError from "../../errors";

export default async function verifyIdMiddleware(req, res, next) {
    const { id } = req.params;
    const query = `SELECT * FROM categories WHERE id = $1`;
    const { rows } = await database.query(query, [id]);
    if (rows.find((category) => category.id === id) === undefined) {
        return res.status(404).json({ message: "Category not found" })
    }
    next();
}