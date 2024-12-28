import express from "express";
import morgan from "morgan";
import connect from "./db/db.js";

connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Backend started working!!");
});

export default app;
