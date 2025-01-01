import express from "express";
import morgan from "morgan";
import connect from "./db/db.js";
import UserRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend started working!!");
});
app.use("/users", UserRoutes);

export default app;
