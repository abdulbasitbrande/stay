"use client";

import { Property } from "@/types/property";
import Link from "next/link";

interface Props {
  property: Property;
  cusClass?: string;
}

const PropertyCard = ({ property, cusClass }: Props) => {
  const { variant = "small-card" } = property;

  return (
    <div className={`${variant ?? ""}`}>
      <Link
        href={`/property/${property.slug}`}
        className="text-decoration-none"
      >
        <div
          className={`card border-0 h-100 ${
            variant === "large-card" ? "flex-md-row" : variant
          } ${cusClass}`}
        >
          {/* IMAGE */}
          <div
            className={`position-relative ${
              variant === "large-card" ? "col-md-6" : ""
            }`}
          >
            <img
              src={property.image}
              className="img-fluid w-100 h-100 object-fit-cover rounded"
              style={{ minHeight: variant === "large-card" ? "300px" : "200px" }}
              alt={property.title}
            />
          </div>

          {/* CONTENT */}
          <div className="card-body d-flex flex-column justify-content-between">
            {/* PRICE */}
            {property.price && (
              <h3 className="fw-bold">
                {new Intl.NumberFormat("en-AE", {
                  style: "currency",
                  currency: "AED",
                  maximumFractionDigits: 0,
                }).format(property.price)}
              </h3>
            )}

            {/* TITLE */}
            <h5 className="mb-2">{property.title}</h5>

            {/* DESCRIPTION */}
            <p className="text-muted mb-1">{property.description}</p>

            {/* TAGS */}
            <div className="d-flex flex-wrap gap-2 mb-3 tags-wrapper">
              {property.tags?.map((tag, i) => (
                <span key={i} className="badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="d-flex gap-2 action-btns-wrapper">
              <button className="action-btns call-btn">
                <span>
                  <img src="/assets/images/cal.svg" alt="" className="me-2" />
                </span>
                Call
              </button>

              <button className="action-btns wahtsapp-btn">
                <span>
                  <img
                    src="/assets/images/whatsapp1.svg"
                    alt=""
                    className="me-2"
                  />
                </span>
                WhatsApp
              </button>

              {variant !== "small-card" && (
                <button className="action-btns email-btn">
                  <span>
                    <img
                      src="/assets/images/email.svg"
                      alt=""
                      className="me-2"
                    />
                  </span>
                  EMAIL
                </button>
              )}
            </div>

            {/* LOCATION */}
            {property.location && (
              <p className="small text-muted mb-3">
                <span>
                  <img
                    src="/assets/images/marker1.svg"
                    alt=""
                    className="me-2"
                  />
                </span>
                {property.location}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
