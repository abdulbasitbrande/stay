"use client";

import { Property, PropertySingle } from "@/types/property";
import Link from "next/link";

type PropertyAgent = PropertySingle["agent"];

interface Props {
  property: Property;
  agent?: PropertyAgent;
  cusClass?: string;
}

const PropertyCard = ({ property, cusClass = "", agent }: Props) => {
  const { variant = "small-card" } = property;

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // ✅ stable class generation (fixes hydration issue)
  const cardClasses = [
    "card",
    "border-0",
    "h-100",
    variant,
    variant === "large-card" ? "flex-md-row" : "",
    cusClass,
  ]
    .filter(Boolean)
    .join(" ");

  // ✅ clean whatsapp number (remove +, spaces, dashes)
  const whatsappNumber = agent?.whatsapp
    ? String(agent.whatsapp).replace(/\D/g, "")
    : "";

  return (
    <div className={variant}>
      <div className={cardClasses}>
        {/* IMAGE */}
        <Link
          href={`/property/${property.slug}`}
          className="text-decoration-none"
        >
          <div
            className={`position-relative ${
              variant === "large-card" ? "col-md-6" : ""
            }`}
          >
            <img
              src={property.image}
              className="img-fluid w-100 h-100 object-fit-cover rounded"
              style={{
                minHeight: variant === "large-card" ? "300px" : "200px",
              }}
              alt={property.title}
            />

            {property.offplan && (
              <span className="position-absolute top-0 start-0 badge-offplan">
                Offplan
              </span>
            )}
          </div>
        </Link>
        {/* CONTENT */}
        <div className="card-body d-flex flex-column justify-content-between">
          {/* PRICE */}
          <Link
            href={`/property/${property.slug}`}
            className="text-decoration-none"
          >
            {property.price ? (
              <h3 className="fw-bold">
                {new Intl.NumberFormat("en-AE", {
                  style: "currency",
                  currency: "AED",
                  maximumFractionDigits: 0,
                }).format(property.price)}
              </h3>
            ) : null}
          </Link>

          {/* TITLE */}
          <Link
            href={`/property/${property.slug}`}
            className="text-decoration-none"
          >
            <h5 className="mb-2">{property.title}</h5>
          </Link>

          {/* DESCRIPTION */}
          <Link
            href={`/property/${property.slug}`}
            className="text-decoration-none"
          >
            <p className="text-muted mb-1">{property.description}</p>
          </Link>
          {/* TAGS */}
          <Link
            href={`/property/${property.slug}`}
            className="text-decoration-none"
          >
            <div className="d-flex flex-wrap gap-2 mb-3 tags-wrapper">
              {property.tags?.map((tag, i) => (
                <span key={i} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
          {/* ACTION BUTTONS */}
          <div className="d-flex gap-2 action-btns-wrapper">
            {/* CALL */}
            {agent?.phone && (
              <a
                href={`tel:${agent.phone}`}
                className="action-btns call-btn"
                onClick={handleStop}
              >
                <img src="/assets/images/cal.svg" alt="call" className="me-2" />
                Call
              </a>
            )}

            {/* WHATSAPP */}
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btns wahtsapp-btn"
                onClick={handleStop}
              >
                <img
                  src="/assets/images/whatsapp1.svg"
                  alt="whatsapp"
                  className="me-2"
                />
                WhatsApp
              </a>
            )}

            {/* EMAIL */}
            {variant !== "small-card" && agent?.email && (
              <a
                href={`mailto:${agent.email}`}
                className="action-btns email-btn"
                onClick={handleStop}
              >
                <img
                  src="/assets/images/email.svg"
                  alt="email"
                  className="me-2"
                />
                Email
              </a>
            )}
          </div>

          {/* LOCATION */}
          <Link
            href={`/property/${property.slug}`}
            className="text-decoration-none"
          >
            {property.location && (
              <p className="small text-muted mb-3">
                <img
                  src="/assets/images/marker1.svg"
                  alt="location"
                  className="me-2"
                />
                {property.location}
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
