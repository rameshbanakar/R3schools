const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./db")
const cors=require("cors")
const authRouter=require("./Router/authRouter")
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config/config.env" });
connectDB()
const app = express();

app.use(cors());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use("/api/auth", authRouter);
app.listen(5000, () => console.log("server started@localhost 5000"));