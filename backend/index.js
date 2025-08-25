const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductsRouter = require("./Routes/ProductsRouter");

require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

// ✅ Allowed origins
const allowedOrigins = [
  "https://authentication-app-ui-beryl.vercel.app", // ✅ correct frontend domain
  "http://localhost:5173" // ✅ Vite dev server
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(bodyParser.json());

// ✅ Test route
app.get("/ping", (req, res) => {
  res.send("Hello, Kapil Shahbadi");
});

// ✅ Routes
app.use("/auth", AuthRouter);
app.use("/products", ProductsRouter);

// 🔴 Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error Message:", err.message);
  console.error("📌 Error Stack:", err.stack);

  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
