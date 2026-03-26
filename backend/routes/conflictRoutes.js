const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
    try {
        const users = await User.find();

        res.json(users); // send all users
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;