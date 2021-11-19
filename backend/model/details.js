const mongoose = require("mongoose");

const Forum = new mongoose.Schema({
    
    name : {
        type: String,
        required : true
    },
    image : {
        type: String
    },
    caption : {
        type: String
    },
    comments : {
        type: Array
    }

});

module.exports = mongoose.model("items", Forum)