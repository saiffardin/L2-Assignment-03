import app from "./app";
import config from "./config";
import mongoose from "mongoose";

async function server() {
  try {
    await mongoose.connect(config.DATABASE_URL!);

    app.listen(config.PORT, () => {
      console.log(`Server Running on port ${5000} `);
    });
  } catch (error) {
    console.log("Failed to connect Mongoose.");
    console.error(error);
  }
}

server();
