import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("DB connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "fin-customer",
      bufferCommands: true,
    });
    console.log("Connecting to database...");
    console.log("DB connected");
  } catch (err) {
    console.log("Error: ", err);
    throw new Error("Error connecting to database");
  }
};

export default connect;