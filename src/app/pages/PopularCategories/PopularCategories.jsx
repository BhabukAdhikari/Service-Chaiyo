// PopularCategories.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "../PopularCategories/PopularCategories.css";
import { cardsData } from "../../mock/popularcategories";

export const PopularCategories = () => {
  return (
    <Container>
      <h1>Popular Services</h1>
      <Row className="justify-content-center mt-5">
        {cardsData.map((category) => (
          <Col key={category.id} lg={4} md={6}>
            <Card className="d-flex mb-4 p-3">
              <Row>
                <Col
                  xs={2}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Img
                    variant="top"
                    src={category.imageSrc}
                    alt="img"
                    className="rounded-circle"
                  />
                </Col>
                <Col xs={10}>
                  <Card.Body className="p-0">
                    <Card.Title>{category.title}</Card.Title>
                    <Card.Text className="card-text">{`${category.providersCount} providers`}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
