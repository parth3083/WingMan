import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connect() {
  const uri = process.env.MONGODB_URI || "";
  try {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("Database connectd successfully✅✅✅");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

export default connect;
