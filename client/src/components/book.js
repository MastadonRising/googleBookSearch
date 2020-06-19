import React from "react";
import { MDBListGroupItem, MDBRow, MDBCol, MDBBtn } from "mdbreact";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <MDBListGroupItem>
      <MDBRow className="flex-wrap-reverse">
        <MDBCol size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </MDBCol>
        <MDBCol size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              View
            </a>
            <MDBBtn />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="12 sm-4 md-2">
          <img
            className="img-thumbnail img-fluid w-100"
            src={image}
            alt={title}
          />
        </MDBCol>
        <MDBCol size="12 sm-8 md-10">
          <p>{description}</p>
        </MDBCol>
      </MDBRow>
    </MDBListGroupItem>
  );
}

export default Book;
