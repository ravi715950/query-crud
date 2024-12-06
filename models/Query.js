const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    phone: { type: String, required: true, unique: true },
    email: { type: String},
    description: { type: String},
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Query", querySchema);
