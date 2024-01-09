import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  // Add your WhatsApp number in the href attribute
  const whatsappLink = "https://wa.me/8955899659";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppIcon;
