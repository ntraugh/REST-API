const express = require("express");
const router = require("express").Router();
const Followers = require("../models/followers")

// Get all followers
router.get("/", async (req, res) => {
    try {
        // creating a const variable for ALL OF our followers
        const followers = await Followers.find()
        res.json(followers)
// catching an error if it exists
    } catch (err) {
        res.status(500).json({message: "Failed"})
    }
})
// Get one follower by ID
router.get("/:id", (req, res) => {
    res.send(req.params.id)
})
// Create a new follower
router.post("/", (req, res) => {
    
})
// Update a follower by ID
router.put("/:id", (req, res) => {
    req.params.id
})
// Delete a follower by ID
router.delete("/:id", (req, res) => {
    req.params.id
    
})


module.exports = router