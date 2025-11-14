import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <h3 className="text-3xl font-bold mb-10 text-center">Contact Us</h3>
      <div className="max-w-xl mx-auto">
        <form className="grid gap-5">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded h-32"></textarea>
          <Button variant="primary" type="submit">Send Message</Button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

