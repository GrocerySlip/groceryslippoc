import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SmallerWhatsAppIcon = () => {
  // Add your WhatsApp number in the href attribute
  const whatsappLink = "https://wa.me/+918955899659";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="smaller-whatsapp-icon"
    >
      <FaWhatsapp />
    </a>
  );
};

export default SmallerWhatsAppIcon;
