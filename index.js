const express = require("express");
const connectDB = require("../server/utils/connectdb");
const router = require("../server/router/router");
const cors = require("cors");

const app = express();
const port = 4000;

// CORS options
const corsOptions = {
  origin: "http://localhost:3000",
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
