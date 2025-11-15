import React from "react";

const SectionWrapper = ({ id, className = "", children }) => {
  return (
    <section id={id} className="w-full py-20 px-6 lg:px-20">
      <div className={`max-w-7xl mx-auto ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
