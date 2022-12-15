import express from "express"
import categoryRoutes from "./routers/categories.routes"
import productRoutes from "./routers/products.routes"

const app = express()

app.use(express.json())
app.use(categoryRoutes)
app.use(productRoutes)

export default app
