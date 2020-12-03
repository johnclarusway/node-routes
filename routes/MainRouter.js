const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", { name: req.query.name });
});

router.post("/", (req, res) => {
  res.send("post");
});

module.exports = router;
