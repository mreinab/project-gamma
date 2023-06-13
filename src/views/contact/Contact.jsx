import React, { useRef } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <div className="space">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
