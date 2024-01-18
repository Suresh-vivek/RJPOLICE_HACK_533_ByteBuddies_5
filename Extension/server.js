const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const cors = require("cors");

const app = express();
const port = 3005; // Choose any port you like
app.use(cors());
// Twilio credentials
const accountSid = "AC3c1f1c48b18efd75db7a217913b1da21";
const authToken = "60f197a7cdb3ab4ac120e0618c6d6547";
const twilioNumber = "+14154296930";
const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/sendAcknowledgment", (req, res) => {
  const { contactNo } = req.body;

  client.messages
    .create({
      body: "Thank you for reporting the fraud. We have received your report.",
      from: twilioNumber,
      to: `+91${contactNo}`,
    })
    .then((message) => {
      console.log("Acknowledgment sent successfully. SID:", message.sid);
      res.status(200).send("Acknowledgment sent successfully");
    })
    .catch((error) => {
      console.error("Error sending acknowledgment:", error.message);
      res.status(500).send("Error sending acknowledgment");
    });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
