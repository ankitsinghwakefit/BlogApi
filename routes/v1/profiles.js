var express = require("express");
var router = express.Router();
var auth = require("../../modules/auth");

router.get("/", (req, res) => {
	res.json({ message: "Welcome to ShipThis API" });
});

module.exports = router;
