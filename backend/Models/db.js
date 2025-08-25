const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
  console.error("❌ MONGO_CONN is not defined in .env file");
  process.exit(1); // process ko stop kar do taki bina DB ke server na chale
}

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Connected Successfully...");
})
.catch((err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
  // agar chaho to aur details bhi print kar sakte ho
  // console.error(err);
  process.exit(1); // agar DB connect na ho to app ko band kar do
});
