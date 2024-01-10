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
  title: "groceryslip.com grocery slip",
  description:
    "Groceryslip.com is a website that delivers groceries in Bikaner city. Our website is a good option for fast grocery delivery in Bikaner at good price.",
  keywords:
    "grocery slip, bikaner, kirana store in bikaner, grocery delivery in bikaner",
};

export default Meta;
