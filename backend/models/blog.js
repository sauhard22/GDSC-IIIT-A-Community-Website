const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title : String,
    author : String,
    image : String,
    description : String,
    bloglink : String
});

module.exports = mongoose.model("Blog",blogSchema);