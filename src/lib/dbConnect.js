import * as mongoose from "mongoose";
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default dbConnect;
