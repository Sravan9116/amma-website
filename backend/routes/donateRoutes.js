const express = require("express");
const router = express.Router();
const { saveDonation } = require("../models/donateModel");

// POST - Save donation record
router.post("/", async (req, res) => {
  try {
    const { name, amount } = req.body;
    const saved = await saveDonation(name, amount);
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
