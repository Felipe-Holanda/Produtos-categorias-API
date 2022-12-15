import app from "./app";
import "dotenv/config"
import { startDatabase } from "./database";

export default app.listen(4001, () => {
    startDatabase();
    console.log("Server running");
});