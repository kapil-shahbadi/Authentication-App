const ensureAuthenticated = require('../Middlewares/Auth');
const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res, next) => {
  try {
    console.log('---- logged in user detail ---', req.user);

    res.status(200).json([
      { name: "mobile", price: 10000 },
      { name: "tv", price: 20000 }
    ]);
  } catch (err) {
    console.error("❌ Products Route Error:", err.message);
    next(err); // 🔴 Global error handler ko bhej do
  }
});

module.exports = router;
