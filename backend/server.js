const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const donateRoutes = require("./routes/donateRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/donate", donateRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
