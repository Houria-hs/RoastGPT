import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import roastRoutes from "./routes/roastRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://roast-gpt-brown.vercel.app"]
}));
app.use(express.json());

app.use("/api/roast", roastRoutes);

app.get("/", (req,res)=>{
 res.send("RepoRoast API running 🔥");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log(`Server running on ${PORT}`);
});