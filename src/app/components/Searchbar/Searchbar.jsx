import React, { useState } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import "./Searchbar.css";

export const Searchbar = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    // const values = {
    //   keyword,
    //   category,
    //   address,
    // };
    // console.log(values);
  };

  return (
    <Form onSubmit={onFormSubmit} className="d-md-flex">
      <Row className="headerSearch">
        <Col md={4} className="headerSearchItem">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} className="headerIcon" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Keyword"
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4} className="headerSearchItem">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4} className="headerSearchItem">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon
                icon={faUsers}
                className="headerIcon mr-3 text-primary"
              />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Button type="submit" className="headerBtn">
          Search
        </Button>
      </Row>
    </Form>
  );
};

// import React from 'react'

// export const Searchbar = () => {
//   return (
//     <div>Searchbar</div>
//   )
// }
