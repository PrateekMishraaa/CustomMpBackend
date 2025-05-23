import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Query from "./routes/Query.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// Correct CORS usage
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // typo fixed: "Succes" → "Success"
};
app.use(cors(corsOptions)); // 👈 Apply it here

app.use(express.json());
app.use("/", Query);

mongoose.connect(process.env.MONGOURI)
  .then(() => console.log('Server is connected to database'))
  .catch(() => console.log("Server is disconnected from db"));

app.get("/", (req, res) => {
  res.send("Arpita Trivedi");
  console.log("I love Unnao People");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
