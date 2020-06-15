import React from "react";

const BooksContext = React.createContext({
  Books: [],
  save: () => {},
});

export default BooksContext;
