const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    user: { type: String, required: true }, // Changed from ObjectId to String for this case
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Query", querySchema);
