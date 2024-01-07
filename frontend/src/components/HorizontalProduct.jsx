import { Card, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const HorizontalProduct = ({ product }) => {
  return (
    <Card className="my-2 p-1 rounded">
      <Card.Body>
        <Row>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            {/* Image on the left */}
            <Link to={`/product/${product._id}`}>
              <Card.Img
                style={{ height: "100px", width: "128px" }}
                src={product.image}
                variant="top"
              />
            </Link>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            {/* Data on the right */}
            <Link to={`/product/${product._id}`} className="my-0 pd-0">
              <div className="product-title my-0 pd-0">
                <strong>{product.name}</strong>
              </div>
            </Link>

            <Card.Text
              className="product-desc-in-card"
              style={{ fontSize: "10px" }}
            >
              {product.description}
            </Card.Text>

            {product.price + " "}
            {"\u20B9"}

            <Card.Text as="div" style={{ float: "right" }}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HorizontalProduct;
