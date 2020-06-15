import axios from "axios";

export default {
  getBooks: function (title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes", {
      title,
    });
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
