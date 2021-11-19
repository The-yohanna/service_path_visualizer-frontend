import React, { useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import "../index.css";

const ListView = () => {
  const [paths, setPaths] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/paths")
      .then((res) => res.json())
      .then((data) => setPaths(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(paths);
  return (
    <div>
      <Container>
        <Table responsive="xl">
          {(paths || []).map((item, k) => (
            <tbody key={k} className="list-tb">
              <td className="path-col">
                <Card className="pathlist-card">
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
              </td>

              {(item.children || []).map((child) => (
                <td className="node-col">
                  <Card.Body
                    className="node-cardbd"
                    style={{
                      backgroundColor:
                        child.state === 1
                          ? "green"
                          : child.state === -1
                          ? "red"
                          : "grey",
                    }}
                  >
                    <Card.Text>{child.name}</Card.Text>
                  </Card.Body>
                </td>
              ))}
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default ListView;
