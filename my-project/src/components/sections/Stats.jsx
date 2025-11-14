import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const stats = [
  { label: "Orders Delivered", value: "25K+" },
  { label: "Happy Customers", value: "18K+" },
  { label: "Gift Options", value: "450+" },
  { label: "Cities Served", value: "30+" },
];

const Stats = () => {
  return (
    <SectionWrapper className="bg-pink-100 rounded-2xl">
      <div className="grid md:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-gray-800">{s.value}</h3>
            <p className="text-gray-600 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Stats;
