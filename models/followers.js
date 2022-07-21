const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    followerDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Followers", followerSchema)