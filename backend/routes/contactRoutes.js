const express = require("express");
const router = express.Router();
const { saveContact } = require("../models/contactModel");

// POST - Save contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const saved = await saveContact(name, email, message);
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
