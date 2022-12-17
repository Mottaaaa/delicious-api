const express = require('express');
const router = express.Router();

// import routers
router.use("/recipes", require("./recipe.controller"));
router.use("/user", require("./user.controller"));

module.exports = API = router;