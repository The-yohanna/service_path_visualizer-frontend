import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../index.css";

const SummaryView = () => {
  const [paths, setPaths] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/paths")
      .then((res) => res.json())
      .then((data) => {
        setPaths(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(paths);
  return (
    <div>
      <Container>
        <Row className="summ-row">
          {(paths || []).map((item, k) => (
            <Col key={k} xs={12} md={4} lg={3} className="path-col">
              <Card className="path-card">
                <Card.Body
                  className="path-cardbd"
                  style={{
                    backgroundColor:
                      item.state === 1
                        ? "green"
                        : item.state === -1
                        ? "red"
                        : "grey",
                  }}
                >
                  <Card.Text>{item.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SummaryView;
