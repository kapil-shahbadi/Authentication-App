const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const AuthRouter=require("./Routes/AuthRouter")
const ProductsRouter=require("./Routes/ProductsRouter")

require("dotenv").config();
require("./Models/db");
const PORT=process.env.PORT || 8080;

app.get("/ping",(req,res)=>{
  res.send("HEllo, KApil Shahbadi");
})

app.use(bodyParser.json());
app.use(cors());
app.use("/auth",AuthRouter);
app.use("/products",ProductsRouter);

app.listen(PORT,()=>{
  console.log(`Server is on ${PORT}`);
});



// # Hh9laEYs6bnQj70u
// # PASS=Hh9laEYs6bnQj70u

// # mongodb+srv://ks8827pinku:Hh9laEYs6bnQj70u@cluster0.5jb9dbh.mongodb.net/sample-db?retryWrites=true&w=majority&appName=Cluster0