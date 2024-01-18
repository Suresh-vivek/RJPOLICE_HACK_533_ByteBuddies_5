// index.js
const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Safenet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  maliciousInput: String,
  message: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.post("/submit-feedback", async (req, res) => {
  try {
    const { name, email, maliciousInput, message } = req.body;

    // Create a new feedback document
    const newFeedback = new Feedback({
      name,
      email,
      maliciousInput,
      message,
    });

    // Save the feedback to the database
    await newFeedback.save();

    res
      .status(201)
      .json({ success: true, message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/api/timesofindia_online_frauds", (req, res) => {
  const pythonProcess = spawn("python3", ["scrapper.py"]); // Provide the correct path
  let resultData = "";

  pythonProcess.stdout.on("data", (data) => {
    resultData += data.toString();
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      const jsonData = JSON.parse(resultData);
      res.json(jsonData);
    } else {
      res
        .status(500)
        .json({ error: "Failed to fetch data from Python script." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
