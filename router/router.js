const express = require("express");
const signup = require("../controller/logic");
const router = express.Router();

router.route("/signup").post(signup);

module.exports = router;
