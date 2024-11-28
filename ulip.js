const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const { loginAndGetToken } = require("./HelperFunction/ulipToken");
dotenv.config();
const app = express();
app.use(express.json());
const xml2js = require("xml2js");

app.get("/", async (req, res) => {
  try {
    return res.json({
      status: `App Is Running http://${process.env.HOSTNAME}:${process.env.PORT}`,
    });
  } catch (error) {
    console.error("Error in /upload/single route:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.post("/vehicledata", async (req, res) => {
  const accessToken = await loginAndGetToken();

  console.log(accessToken, req.body.vehiclenumber, "PPPPPPPPPPPPPPPPP");

  try {
    const responseLocation = await axios.post(
      "https://www.ulip.dpiit.gov.in/ulip/v1.0.0/FASTAG/01",
      {
        vehiclenumber: req.body.vehiclenumber,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const responseFasttagType = await axios.post(
      "https://www.ulip.dpiit.gov.in/ulip/v1.0.0/FASTAG/02",
      {
        vehiclenumber: req.body.vehiclenumber,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(
      "FastTag Details:",
      responseFasttagType.data.response[0].response
    );

    return res.json({
      responseFasttagType: responseFasttagType.data.response[0].response,
      responseLocation: responseLocation.data.response[0].response,
    });
  } catch (error) {
    console.error("Fetch FastTag Details Error:", error);
  }
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server running on http://${process.env.HOSTNAME}:${process.env.PORT}`
  )
);
