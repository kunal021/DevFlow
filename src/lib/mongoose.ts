import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.DATABASE_URI) {
    console.log("Missing MONGODB_URI");
  }
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  mongoose
    .connect(process.env.DATABASE_URI!, { dbName: "devflow" })
    .then(() => {
      isConnected = true;
      console.log("MongoDB connected");
    })
    .catch((error) => console.log(error));
};
