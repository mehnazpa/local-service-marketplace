const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Provider = require("../models/Provider");

const router = express.Router();


// ===============================
// CREATE UPLOAD FOLDERS
// ===============================

const folders = [
  "uploads/profiles",
  "uploads/idproof",
  "uploads/certificates"
];

folders.forEach((folder) => {
  const folderPath = path.join(__dirname, "..", folder);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
});


// ===============================
// MULTER STORAGE
// ===============================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    if (file.fieldname === "profilePhoto") {
      cb(null, "uploads/profiles");

    } else if (file.fieldname === "idProof") {
      cb(null, "uploads/idproof");

    } else {
      cb(null, "uploads/certificates");
    }
  },

  filename: function (req, file, cb) {

    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  }
});


// ===============================
// FILE VALIDATION
// ===============================

const fileFilter = (req, file, cb) => {

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf"
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only JPG, PNG and PDF files are allowed"),
      false
    );
  }
};


const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});


// ===============================
// PROVIDER REGISTER
// ===============================

router.post(
  "/register",

  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
    { name: "qualificationCertificate", maxCount: 1 },
    { name: "experienceCertificate", maxCount: 1 }
  ]),

  async (req, res) => {

    try {

      const {
        fullName,
        email,
        phone,
        dateOfBirth,
        gender,
        address,
        city,
        state,
        pincode,
        password,
        highestQualification,
        institution,
        graduationYear,
        serviceCategory,
        experience,
        serviceArea,
        about
      } = req.body;


      // Check fields

      if (
        !fullName ||
        !email ||
        !phone ||
        !dateOfBirth ||
        !gender ||
        !address ||
        !city ||
        !state ||
        !pincode ||
        !password ||
        !highestQualification ||
        !institution ||
        !graduationYear ||
        !serviceCategory ||
        !experience ||
        !serviceArea ||
        !about
      ) {

        return res.status(400).json({
          success: false,
          message: "Please fill all required fields"
        });

      }


      // Password validation

      const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

      if (!passwordRegex.test(password)) {

        return res.status(400).json({
          success: false,
          message:
            "Password must be at least 8 characters and contain at least one digit and one special character"
        });

      }


      // Existing email

      const existingProvider =
        await Provider.findOne({
          email: email.toLowerCase()
        });

      if (existingProvider) {

        return res.status(409).json({
          success: false,
          message:
            "An account with this email already exists"
        });

      }


      // Hash password

      const hashedPassword =
        await bcrypt.hash(password, 10);


      // Uploaded files

      const profilePhoto =
        req.files?.profilePhoto?.[0]?.path || "";

      const idProof =
        req.files?.idProof?.[0]?.path || "";

      const qualificationCertificate =
        req.files?.qualificationCertificate?.[0]?.path || "";

      const experienceCertificate =
        req.files?.experienceCertificate?.[0]?.path || "";


      // Create provider

      const provider = new Provider({

        fullName,

        email: email.toLowerCase(),

        phone,

        dateOfBirth,

        gender,

        address,

        city,

        state,

        pincode,

        password: hashedPassword,

        highestQualification,

        institution,

        graduationYear,

        serviceCategory,

        experience,

        serviceArea,

        about,

        profilePhoto,

        idProof,

        qualificationCertificate,

        experienceCertificate,

        verificationStatus: "Pending"
      });


      await provider.save();


      // Response

      res.status(201).json({

        success: true,

        message:
          "Provider account created successfully. Your account is pending admin verification.",

        provider: {

          id: provider._id,

          fullName: provider.fullName,

          email: provider.email,

          verificationStatus:
            provider.verificationStatus

        }

      });

    } catch (error) {

      console.error(
        "Provider registration error:",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Server error while creating provider account"

      });

    }

  }
);


module.exports = router;