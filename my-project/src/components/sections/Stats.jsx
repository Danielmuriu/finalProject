import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const stats = [
  { label: "Gifts Delivered", value: "10K+" },
  { label: "Happy Customers", value: "5K+" },
  { label: "Cities Reached", value: "12" },
  { label: "Years Experience", value: "7+" },
];

const Stats = () => {
  return (
    <SectionWrapper id="stats" className="grid lg:grid-cols-4 gap-10 text-center">
      {stats.map((s, i) => (
        <div key={i}>
          <h2 className="text-4xl font-bold text-black">{s.value}</h2>
          <p className="text-lg">{s.label}</p>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Stats;
