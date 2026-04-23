// components/FeatureCircles.tsx
import React from "react";
import { FeatureItem } from "@/types/feature";

interface FeatureCirclesProps {
  items: FeatureItem[];
}

const FeatureCircles: React.FC<FeatureCirclesProps> = ({ items }) => {
  return (
    <div className="container py-5">
      <div className="feature-row justify-content-center text-center">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`d-flex justify-content-center ${
              index !== 0 ? "overlap-circle" : ""
            }`}
          >
            <div className="feature-circle d-flex flex-column justify-content-center align-items-center">
              <h6 className="fw-bold">{item.title}</h6>
              <p className="text-muted small mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCircles;
