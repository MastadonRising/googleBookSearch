import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBJumbotron } from "mdbreact";

function NoMatch() {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="md-12">
          <MDBJumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default NoMatch;
