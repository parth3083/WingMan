import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import redisClient from "../services/redis.service.js";

export const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized user" });
    const isBlackListed = await redisClient.get(token);
    if (isBlackListed) {
      res.cookie("token","")
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized user" });
  }
};
