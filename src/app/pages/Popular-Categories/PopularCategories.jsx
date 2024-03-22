import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./PopularCategories.css";
import { cardsData } from "../../mock/popularcategories";

export const PopularCategories = () => (
  <Container>
    <h1 className="text-center my-5">Popular Services</h1>
    <Row className="justify-content-center mt-5">
      {cardsData.map(({ id, imageSrc, title, providersCount }) => (
        <Col key={id} lg={4} md={6}>
          <Card className="card d-flex p-3 mb-5">
            <Row>
              <Col xs={3} className="d-flex justify-content-center align-items-center">
                <span className="image-bg">
                  <Card.Img variant="top" src={imageSrc} alt="img"  />
                </span>
              </Col>
              <Col xs={9}>
                <Card.Body className="ml-2">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="card-text">{`${providersCount} providers`}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

