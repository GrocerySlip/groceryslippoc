import { Card, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const HorizontalProduct = ({ product }) => {
  return (
    <Card className="p-0">
      <Link to={`/product/${product._id}`} className="my-0 pd-0 custom-link">
        <Card.Body className="p-1">
          <Row className="p-0 custom-row">
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              {/* Image on the left */}
              <Card.Img src={product.image} variant="top" className="p-1" />
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              {/* Data on the right */}
              <div className="product-title my-0 pd-0">
                <strong>{product.name}</strong>
              </div>
              <Card.Text
                className="product-desc-in-card"
                style={{ fontSize: "12px" }}
              >
                {product.description}
              </Card.Text>

              <div className="d-flex justify-content-between align-items-center pr-1">
                <div>
                  {product.price + " "}
                  {"\u20B9"}
                </div>

                <div className="text-right">
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews}`}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default HorizontalProduct;
