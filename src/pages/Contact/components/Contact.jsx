import React from "react";
import ContactContent from "../components/ContactContent";
import bgImg from "../../../assets/bg-img.png";

const Contact = () => {
  return (
    <main
      className="fixed bottom-0 left-0 w-full h-screen z-10 bg-cover bg-center overflow-x-hidden flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <ContactContent />
    </main>
  );
};

export default Contact;