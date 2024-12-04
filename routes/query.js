const express = require("express");
const Query = require("../models/Query");

const router = express.Router();

router.post("/", async (req, res) => {
    const { user, description } = req.body;

    if (!user || !description) {
        return res.status(400).json({ message: "User and description are required" });
    }

    try {
        const query = new Query({ user, description });
        await query.save();
        res.status(201).json(query);
    } catch (err) {
        console.error("Error creating query:", err); // Log the error
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Get all queries
router.get("/", async (req, res) => {
    try {
        const queries = await Query.find().populate("user", "username");
        res.json(queries);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Delete a query
router.delete("/:id", async (req, res) => {
    try {
        const query = await Query.findByIdAndDelete(req.params.id);
        if (!query) return res.status(404).json({ message: "Query not found" });
        res.json({ message: "Query deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;