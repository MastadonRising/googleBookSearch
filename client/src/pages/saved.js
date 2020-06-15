import React, { useState, useEffect } from "react";
import { Row, Col, Container, Jumbotron } from "mdbreact";
import API from "../utils/API";

function Saved() {
  const [Books, setBooks] = useState({});

  useEffect(() => {
    API.getSavedBooks().then((res) => {
      setBooks(res.data).catch((err) => console.log(err));
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">
              <strong> Google Books Search</strong>
            </h1>
            <h2 className="text-center">Search for and Save Books.</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Card title="Saved Books" icon="download">
            {Books.length ? (
              <List>
                {Books.map((book) => (
                  <Book
                    key={book._id}
                    title={book.title}
                    subtitle={book.subtitle}
                    link={book.link}
                    authors={book.authors.join(", ")}
                    description={book.description}
                    image={book.image}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookDelete(book._id)}
                        className="btn btn-danger ml-2"
                      >
                        Delete
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <h2 className="text-center">No Saved Books</h2>
            )}
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Saved;
