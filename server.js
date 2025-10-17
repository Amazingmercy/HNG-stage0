const express = require("express")
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000;
const CATFACT_URL = process.env.CATFACT_URL


//MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());



// ====== Rate Limiter ======
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per minute
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,  // Disable the deprecated X-RateLimit-* headers
  message: {
    status: "error",
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter); 

const user = {
    "email": "amaefulemercy499@gmail.com",
    "name": "Mercy Chimnonso Amaefule",
    "stack": "Node.js/Express" 
}

app.get("/me", async (req, res) => {
    try {
    // set timeout manually
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), process.env.REQUEST_TIMEOUT);

    const response = await fetch(CATFACT_URL, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) {
      return res.status(response.status).json({ status: "error", message: "Failed to fetch cat fact" });
    }

    const data = await response.json();
    res.status(200).json({status: "success", user, timestamp: new Date(), fact: data.fact});
  } catch (err) {
    if (err.name === "AbortError") {
      return res.status(504).json({ status: "error", message: "Request timed out" });
    }
    res.status(500).json({ status: "error", message: "Server error" });
  }
    
})




app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`)
})