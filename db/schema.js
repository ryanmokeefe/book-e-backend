const mongoose = require('mongoose')

const BookmarkSchema = new mongoose.Schema({
  title: String,
  url: String
})
mongoose.model("Bookmark", BookmarkSchema);

module.exports = mongoose
