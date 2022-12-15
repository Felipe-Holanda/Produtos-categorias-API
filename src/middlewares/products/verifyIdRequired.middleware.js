import database from "../../database";

export default async function verifyIdRequestedMiddleware(req, res, next) {
    const { id } = req.params;
    const query = `SELECT * FROM products WHERE id = $1`;
    const results = await database.query(query, [id]);
    if (results.rowCount === 0) {
        return res.status(404).json({ message: "Product not found" });
    }
    return next();
}

