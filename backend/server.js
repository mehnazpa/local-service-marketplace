const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const User = require("./models/User");

dotenv.config();

const app = express();

// MongoDB connection
//changes made
connectDB()
  .then(
      () => {
          console.log("Database is connected successfully!!")
          app.listen(5000, () => {
              console.log("Server is listening in port 5000...");
      })
  })
  .catch(
      (err) => console.error("Database is not connected...")
  )
  
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.post("/signup", async(req,res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.send("user saved successfully!!");
    }catch(err){
        res.status(404).send("User Failed...");
    }
    
})
// Routes
const providerRoutes = require("./routes/providerRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/providers", providerRoutes);
app.use("/api/auth", authRoutes);

// Basic test route
app.get("/user",(req, res) => {
  try{
      res.send("Hello")
  }catch(err){
      res.status(400).send("error");
  }
})

