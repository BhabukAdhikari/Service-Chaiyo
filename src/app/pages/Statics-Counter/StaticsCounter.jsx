import React from "react";
import "./StaticsCounter.css";
import { Col, Container, Row } from "react-bootstrap";
import { staticsData } from "../../mock/staticsdata";

const CounterBox = ({ title, count, titleColor, countColor }) => (
  <>
    <h1 className="counter-title" style={{ color: countColor }}>
      {count}
    </h1>
    <p className="counter-para" style={{ color: titleColor }}>
      {title}
    </p>
  </>
);

export const StaticsCounter = () => (
  <Container>

    <div className="statics-section bg-primary">
      <div className="section-header mb-5">
        <h3 className="text-warning">Statics</h3>
        <h1 className="text-light">
          Trusted by thousands of people all over the world
        </h1>
        <p className="text-light">
          Find the statistics of every section that you want.
        </p>
      </div>
      <Row className="boxes">
        {staticsData.map((item) => (
          <Col key={item.id} md={3} className="counter-box">

            <CounterBox {...item} />
          </Col>
        ))}
      </Row>
    </div>
  </Container>
);
