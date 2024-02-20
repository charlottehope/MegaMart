import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    document.title = "MegaMart | Contact us";
  }, []);
  return (
    <Layout>
      <div className="container">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
