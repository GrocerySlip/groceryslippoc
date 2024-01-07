import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "GrocerySlip.com",
  description: "Grocery from your kirana store",
  keywords: "grocery, bikaner, kirana",
};

export default Meta;
