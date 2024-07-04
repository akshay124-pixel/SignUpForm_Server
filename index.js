const express = require("express");
const connectDB = require("./utils/connectdb");
const router = require("./router/router");
const cors = require("cors");

const app = express();
const port = 4000;

// CORS options
const corsOptions = {
  origin: "https://sign-up-form-umber.vercel.app",
  methods: "GET,POST,DELETE",
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/form", router);

// Connect to the database
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  });
