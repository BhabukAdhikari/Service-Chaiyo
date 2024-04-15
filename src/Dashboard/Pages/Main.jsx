import React from "react";
import Dashboard from "../Dashboard";
import "../Style/main.css";
import Card from "react-bootstrap/Card";
import requestIcon from "../assets/request.png";
import pendingIcon from "../assets/pending.png";
import completedIcon from "../assets/completed.png";
import Table from "./Table";

const Main = () => {
  return (
    <div className="main-component">
      <Dashboard />

      <div className="main-section">
        <Card style={{ width: "19rem", marginLeft: "13px" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "135px", marginTop: "10px" }}>
              Total Request
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{
                marginLeft: "140px",
                fontSize: "40px",
                fontWeight: "bolder",
              }}
            >
              1000
            </Card.Subtitle>
            <Card.Text>
              <img
                src={requestIcon}
                alt=""
                style={{ width: "90px", marginTop: "-90px" }}
              />
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "30px" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "135px", marginTop: "10px" }}>
              Pending
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{
                marginLeft: "130px",
                fontSize: "40px",
                fontWeight: "bolder",
                marginTop: "-10px"
              }}
            >
              2000
            </Card.Subtitle>
            <Card.Text>
              <img
                src={pendingIcon}
                alt=""
                style={{ width: "90px", marginTop: "-85px" }}
              />
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "30px" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "135px", marginTop: "10px" }}>
              Completed
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{
                marginLeft: "140px",
                fontSize: "40px",
                fontWeight: "bolder",
              }}
            >
              3000
            </Card.Subtitle>
            <Card.Text>
              <img
                src={completedIcon}
                alt=""
                style={{ width: "90px", marginTop: "-90px" }}
              />
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="table-sections">
          <h4>Recently Added Services</h4>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Main;
