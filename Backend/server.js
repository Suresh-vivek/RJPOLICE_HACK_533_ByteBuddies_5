// index.js
const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
const port = 3001;

app.use(cors());

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
