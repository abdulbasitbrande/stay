"use client";

import { Property } from "@/types/property";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  const variant = property.variant || "small";

  return (
    <div
      className={`card border-0 shadow-sm h-100 ${
        variant === "large" ? "flex-md-row" : ""
      }`}
    >
      {/* IMAGE */}
      <div
        className={`position-relative ${variant === "large" ? "col-md-6" : ""}`}
      >
        <img
          src={property.image}
          className="img-fluid w-100 h-100 object-fit-cover rounded"
          style={{ minHeight: variant === "large" ? "300px" : "200px" }}
        />
      </div>

      {/* CONTENT */}
      <div className="card-body p-3 d-flex flex-column justify-content-between">
        {/* PRICE */}
        {property.price && (
          <h5 className="text-primary fw-bold">{property.price}</h5>
        )}

        {/* TITLE */}
        <h6 className="fw-bold mb-2">{property.title}</h6>

        {/* DESCRIPTION */}
        <p className="text-muted small mb-3">{property.description}</p>

        {/* TAGS */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {property.tags.map((tag, i) => (
            <span key={i} className="badge bg-light text-dark border">
              {tag}
            </span>
          ))}
        </div>

        {/* LOCATION (only for medium/large) */}
        {property.location && (
          <p className="small text-muted mb-3">{property.location}</p>
        )}

        {/* ACTION BUTTONS */}
        <div className="d-flex gap-2">
          <button className="btn btn-outline-dark btn-sm w-100">Call</button>
          <button className="btn btn-outline-success btn-sm w-100">
            WhatsApp
          </button>
          {variant !== "small" && (
            <button className="btn btn-outline-primary btn-sm w-100">
              Email
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
