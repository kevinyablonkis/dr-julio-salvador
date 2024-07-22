import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "TU_ENLACE_DE_CONEXIÓN_A_MONGO"
    );
    console.log(">>DB is connected");
  } catch (error) {
    console.log(error);
  }
};
