import React from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";

const NewsList = ({ news, loading }) => {
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading news...</p>
      </div>
    );
  }

  return (
    <Row>
      {news.map((article, index) => (
        <Col key={index} md={4} sm={6} xs={12} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={article.image || "https://via.placeholder.com/400"} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Read More
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NewsList;
