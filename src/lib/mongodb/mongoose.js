import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("mongodb connected successfully");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-auth-app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb Connected"),
    (initialized = true);
  } catch (error) {
    console.log("mongodb Connected Error :", error);
  }
};
