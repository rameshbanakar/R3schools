const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",(req,res)=>{res.send("hello")})
app.listen(5000, () => console.log("server started@localhost 5000"));