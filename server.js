const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./db")
const authRouter=require("./Router/authRouter")
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config/config.env" });
connectDB()
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.listen(5000, () => console.log("server started@localhost 5000"));