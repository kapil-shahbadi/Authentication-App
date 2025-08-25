const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized, token is required",
      });
    }

    // 🔑 Bearer token handle karna (best practice)
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // user data attach kar diya
    next();
  } catch (err) {
    console.error("❌ Auth Middleware Error:", err.message);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired, please login again",
      });
    }

    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal authentication error",
    });
  }
};

module.exports = ensureAuthenticated;
