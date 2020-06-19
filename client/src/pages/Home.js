import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBJumbotron,
  MDBFooter,
  MDBCard,
  MDBListGroup,
} from "mdbreact";
import Book from "../components/book";
import Form from "../components/form";
import API from "../utils/API";
import { useState, useContext, useEffect } from "react";

function Home() {
  const [Title, setTitle] = useState("The Bible");
  const [Books, setBooks] = useState({});
  const [Message, setMessage] = useState("Please search for a book");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setTitle(value);
  }

  function getBooks() {
    API.getBooks(Title)
      .then((res) => setBooks(res.data))
      .catch(() => {
        setBooks({});
        setMessage("No Books Found, Please try another title");
      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    getBooks();
  }

  function handleBookSave(id) {
    const book = Books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sixe="12">
          <MDBJumbotron>
            <h1 className="text-center">
              <strong> Google Books Search</strong>
            </h1>
            <h2 className="text-center">
              Search for and Save Books of Interest.
            </h2>
          </MDBJumbotron>
        </MDBCol>
        <MDBCol size="md-12">
          <MDBCard title="Book Search" icon="far fa-book">
            <Form
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              Title={Title}
            />
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="md-12">
          <MDBCard title="Results">
            {Books.length ? (
              <MDBListGroup>
                {Books.map((book) => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => handleBookSave(book.id)}
                        className="btn btn-primary ml-2"
                      >
                        Save
                      </button>
                    )}
                  />
                ))}
              </MDBListGroup>
            ) : (
              <h2 className="text-center">{Message}</h2>
            )}
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBFooter />
    </MDBContainer>
  );
}

export default Home;
