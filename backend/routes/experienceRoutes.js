const express = require("express");
const router = express.Router();
const { saveExperience } = require("../models/experienceModel");

// POST - Save devotee experience
router.post("/", async (req, res) => {
  try {
    const { name, experience } = req.body;
    const saved = await saveExperience(name, experience);
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
