import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const server = http.createServer(app);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
