import React, { useMemo, useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Button from "../common/Button";
import productsData from "../../data/products";
import bikeDelivery from "../../assets/bike-delivery.jpg";

const uniq = (arr) => Array.from(new Set(arr.flat()));

const Shop = () => {
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const occasions = useMemo(() => uniq(productsData.map((p) => p.occasion)), []);
  const recipients = useMemo(() => uniq(productsData.map((p) => p.recipient)), []);
  const types = useMemo(() => Array.from(new Set(productsData.map((p) => p.type))), []);

  const filtered = productsData.filter((p) => {
    if (selectedOccasion && !p.occasion.includes(selectedOccasion)) return false;
    if (selectedRecipient && !p.recipient.includes(selectedRecipient)) return false;
    if (selectedType && p.type !== selectedType) return false;
    return true;
  });

  return (
    <SectionWrapper id="shop">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Shop</h3>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2">Occasion</label>
            <select value={selectedOccasion} onChange={(e) => setSelectedOccasion(e.target.value)} className="w-full p-2 border rounded">
              <option value="">All</option>
              {occasions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Recipient</label>
            <select value={selectedRecipient} onChange={(e) => setSelectedRecipient(e.target.value)} className="w-full p-2 border rounded">
              <option value="">All</option>
              {recipients.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full p-2 border rounded">
              <option value="">All</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <Button variant="outline" onClick={() => { setSelectedOccasion(""); setSelectedRecipient(""); setSelectedType(""); }}>Reset</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {filtered.map((p) => (
            <Card key={p.id} title={p.name} price={p.price} image={p.image || bikeDelivery}>
              <Button variant="primary">View</Button>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Shop;
