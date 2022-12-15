export default async function verifyCreationMiddleware(req, res, next) {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: "Required fields are incomplete" });
    }
    next();
}