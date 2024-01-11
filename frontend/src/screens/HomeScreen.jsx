import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import HorizontalProduct from "../components/HorizontalProduct";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      <Meta />
      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )} */}
      {keyword && (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <p style={{ color: "black", marginBottom: "2px", fontSize: "12px" }}>
            Call or whatsapp your grocery slip to 8955899659.
            <FaPhoneAlt /> <FaWhatsapp />
            <span style={{ color: "red" }}>{" Only in Bikaner."}</span>
          </p>
          <p style={{ fontSize: "10px" }}>
            Grocery Items not listed in product list are also available.
          </p>

          <Row className="p-1">
            {/* {data.products.map((product) => (
              // <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Col key={product._id} xs={12} sm={12} md={12} lg={6} xl={6}>
                <HorizontalProduct product={product} />
              </Col>
            ))} */}

            {data.products.length === 0 ? (
              <Card>
                <Card.Text style={{ color: "red" }}>
                  Item not added in product list yet.
                </Card.Text>
                <Card.Text style={{ color: "red" }}>
                  Please whatsapp the required Items on 8955899659, we will see
                  if we can get it delievered to you.
                </Card.Text>
                <Card.Text style={{ color: "red" }}>
                  खोजी गई वस्तु अभी तक उत्पाद सूची में नहीं पहुंची है। कृपया
                  स्टोर में जांच करने तथा डिलीवर के लिए 8955899659 पर संपर्क
                  करें।
                </Card.Text>
              </Card>
            ) : (
              data.products.map((product) => (
                <Col
                  key={product._id}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="p-1"
                >
                  <HorizontalProduct product={product} />
                </Col>
              ))
            )}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
