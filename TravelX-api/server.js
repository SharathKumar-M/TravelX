const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./router/authRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "travelx server is running" });
});

app.listen(PORT, () => {
  console.log("server is running in port 5000");
});
