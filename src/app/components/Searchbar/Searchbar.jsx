import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

import "./Searchbar.css";

export const Searchbar = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const values = {
      keyword,
      category,
      address,
    };
    console.log(values);
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      className="d-md-flex bg-light mx-auto text-center"
    >
      <Row className="headerSearch">
        <Col md={3} className="headerSearchItem">
            <Form.Control
            className="form-inputs"
              type="text"
              placeholder="Keyword"
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
        </Col>
        <Col md={3} className="headerSearchItem">
            <Form.Control
             className="form-inputs"
              type="text"
              placeholder="Category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
        </Col>
        <Col md={3} className="headerSearchItem">
            <Form.Control
             className="form-inputs"
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
        </Col>
        <Col md={3} className="headerSearchItem ">
          <Button type="submit" className="headerBtn btn-primary ">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
