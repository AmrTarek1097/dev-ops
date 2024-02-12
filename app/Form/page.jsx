import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactUs from "./components/ContactUs";
import FormSec from "./components/FormSec";
const Form = () => {
  return (
    <>
      <Navbar />
      <FormSec/>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Form;
