import express from "express"
import categoriesRoutes from "./routes/categories.routes"
import productsRoutes from "./routes/products.routes"

const app = express()

app.use(express.json())
app.use("/categories", categoriesRoutes)
app.use("/products", productsRoutes)

export default app
