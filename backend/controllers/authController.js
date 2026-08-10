const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Provider = require("../models/Provider");

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check required fields
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Email, password and role are required",
      });
    }

    let account;

    // CUSTOMER LOGIN
    if (role === "customer") {
      account = await User.findOne({
        email: email.toLowerCase(),
      });
    }

    // PROVIDER LOGIN
    else if (role === "provider") {
      account = await Provider.findOne({
        email: email.toLowerCase(),
      });
    }

    // Invalid role
    else {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    // Account not found
    if (!account) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      account.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: account._id,
        role: role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Successful login
    res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      user: {
        id: account._id,
        fullName: account.fullName,
        email: account.email,
        role: role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

module.exports = {
  login,
};