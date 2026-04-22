"use client";

import { Property } from "@/types/property";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  const variant = property.variant || "small";

  return (
    <div
      className={`card border-0 h-100 ${
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
      <div className="card-body d-flex flex-column justify-content-between">
        {/* PRICE */}
        {property.price && (
          <h3 className="text-primary fw-bold">{property.price}</h3>
        )}

        {/* TITLE */}
        <h5 className="mb-2">{property.title}</h5>

        {/* DESCRIPTION */}
        <p className="text-muted mb-1">{property.description}</p>

        {/* TAGS */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {property.tags.map((tag, i) => (
            <span key={i} className="badge">
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
          <button className="action-btns call-btn">
            <span>
              <img src="assets/images/cal.svg" alt="" className="me-2" />
            </span>
            Call
          </button>
          <button className="action-btns wahtsapp-btn">
            <span>
              <img src="assets/images/whatsapp1.svg" alt="" className="me-2" />
            </span>
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
