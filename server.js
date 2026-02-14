const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;  // New port

// Send HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Story API
app.get("/story", (req, res) => {
    const story = [
        "As evening falls, a man reaches a quiet forest.",
        "He chooses a safe spot and carefully sets up his tent.",
        "He gathers dry wood and lights a small campfire.",
        "The fire glows warmly as darkness spreads across the forest.",
        "He cooks a simple meal and eats peacefully.",
        "He looks at the bright stars shining above him.",
        "The forest is calm with only soft night sounds.",
        "He enters his tent and rests comfortably.",
        "At sunrise, he wakes up grateful for the peaceful night adventure."
    ];

    res.json(story);
});

// Start server
app.listen(PORT, () => {
    console.log("✅ Server running at http://localhost:" + PORT);
});
