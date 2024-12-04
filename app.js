const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const authRoutes = require("./routes/auth");
const queryRoutes = require("./routes/query");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/query", queryRoutes);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 8000;
console.log(process.env.MONGO_URI)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

