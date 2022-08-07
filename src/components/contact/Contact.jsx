import React from "react";
import NavBarPortfolio from "../navbar/NavBarPortfolio";
import "./Contact.css";
import { ContactUs } from "./ContactUs";

export const Contact = () => {
  return (
    <div className="layaut-contact_main">
      <NavBarPortfolio />
      <div className="contact-container">
        <ContactUs />
      </div>
    </div>
  );
};
