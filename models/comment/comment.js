const mongoose = require('mongoose');

//comment schema
const commentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.object,
        required: true,
        ref: "User",
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})


//compile shcmea to form model

const Comment = mongoose.model("Comment", commentSchema);

//export model
module.exports = Comment;