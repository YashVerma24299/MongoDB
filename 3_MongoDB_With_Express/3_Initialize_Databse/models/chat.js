const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const chatSchema = new Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        maxlngth:50
    },
    created_at:{
        type: Date,
        required: true,
    }
})
const Chat = new model("Chat", chatSchema); 

module.exports = Chat;