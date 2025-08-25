const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductsRouter = require("./Routes/ProductsRouter");

require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("Hello, Kapil Shahbadi");
});

app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/auth", AuthRouter);
app.use("/products", ProductsRouter);

// 🔴 Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error Message:", err.message);
  console.error("📌 Error Stack:", err.stack);
  
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
