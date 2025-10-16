import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import{connectDB} from "./utils/Db.js"

import authRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
    origin:"http://localhost:5173",
    credentials: true,
})
);

app.use("/api/user",authRoutes);
app.use('/api/chat',chatRoutes)


app.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
    connectDB()
});