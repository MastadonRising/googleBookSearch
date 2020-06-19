const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  authors: [""],
  description: { type: String, required: false },
  image: { type: String, required: false },
  link: { type: String, required: false },
  title: { type: String },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
