import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <h3 className="text-3xl font-bold mb-10 text-center">Contact Us</h3>
      <div className="max-w-xl mx-auto">
        <form className="grid gap-5 mb-10">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded h-32"></textarea>
          <Button variant="primary" type="submit">Send Message</Button>
        </form>
        
        <div className="text-center border-t pt-8">
          <h4 className="text-xl font-bold mb-6">Reach us through</h4>
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/254742227494" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium">WhatsApp</a>
            <a href="mailto:giftsparadisekenya@gmail.com" className="text-pink-600 hover:text-pink-700 font-medium">Email</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium">Facebook</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
