// import React, { useState, useEffect } from "react";
// import {
//   MDBRow,
//   MDBCol,
//   MDBContainer,
//   MDBJumbotron,
//   MDBCard,
//   MDBListGroup,
//   MDBFooter,
// } from "mdbreact";
// import API from "../utils/API";

// function Saved() {
//   const [Books, setBooks] = useState({});

//   useEffect(() => {
//     API.getSavedBooks().then((res) => {
//       setBooks(res.data).catch((err) => console.log(err));
//     });
//   }, []);

//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol size="md-12">
//           <MDBJumbotron>
//             <h1 className="text-center">
//               <strong> Google Books Search</strong>
//             </h1>
//             <h2 className="text-center">Search for and Save Books.</h2>
//           </MDBJumbotron>
//         </MDBCol>
//       </MDBRow>
//       <MDBRow>
//         <MDBCol size="md-12">
//           <MDBCard title="Saved Books" icon="download">
//             {Books.length ? (
//               <MDBListGroup>
//                 {Books.map((book) => (
//                   <Book
//                     key={book._id}
//                     title={book.title}
//                     subtitle={book.subtitle}
//                     link={book.link}
//                     authors={book.authors.join(", ")}
//                     description={book.description}
//                     image={book.image}
//                     Button={() => (
//                       <button
//                         onClick={() => this.handleBookDelete(book._id)}
//                         className="btn btn-danger ml-2"
//                       >
//                         Delete
//                       </button>
//                     )}
//                   />
//                 ))}
//               </MDBListGroup>
//             ) : (
//               <h2 className="text-center">No Saved Books</h2>
//             )}
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//       <MDBFooter />
//     </MDBContainer>
//   );
// }

// export default Saved;
