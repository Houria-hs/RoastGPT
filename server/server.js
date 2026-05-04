import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import roastRoutes from "./routes/roastRoutes.js";

dotenv.config();

const app = express();

const defaultOrigins = [
  "http://localhost:5173",
  "https://roast-nce1pitjy-houria-hs-projects.vercel.app",
  "https://roast-gpt-brown.vercel.app"
];

const envOrigins = process.env.FRONTEND_URLS
  ? process.env.FRONTEND_URLS.split(",").map((url) => url.trim()).filter(Boolean)
  : [];

const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy: origin ${origin} not allowed`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/roast", roastRoutes);

app.get("/", (req,res)=>{
 res.send("RepoRoast API running 🔥");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log(`Server running on ${PORT}`);
});