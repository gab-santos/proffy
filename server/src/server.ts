import "./config/dotenv";
import app from "./app";

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST_IP || "http://localhost";

app.listen(PORT, () => console.log(`Server started on ${HOST}:${PORT} :)`));
