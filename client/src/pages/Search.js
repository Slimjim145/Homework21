import React, { useState, useEffect } from "react";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Form from "../components/Form";
import BookCard from "../components/BookCard";
import API from "../utils/API";
const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      console.log(formObject.title);
      API.getSearchedBook(formObject.title)
        .then((res) => {
          let { data } = res;
          console.log(data.items);
          setSearchResults(data.items);
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col size="sm-12">
            <Form
              name="title"
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            ></Form>
          </Col>
        </Row>
      </Container>
      <Container>
        {searchResults.length ? (
          searchResults.map((result) => {
            let { volumeInfo } = result;
            return (
              <Row>
                <BookCard
                  key={volumeInfo.title}
                  title={volumeInfo.title}
                  authors={volumeInfo.authors ? volumeInfo.authors : ""}
                  description={volumeInfo.description}
                  image={
                    volumeInfo.imageLinks
                      ? volumeInfo.imageLinks.smallThumbnail
                      : ""
                  }
                  link={volumeInfo.canonicalVolumeLink}
                  otherLabel="saved"
                ></BookCard>
              </Row>
            );
          })
        ) : (
          <h3 className="text-muted text-center pb-2">No Results</h3>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Search;
