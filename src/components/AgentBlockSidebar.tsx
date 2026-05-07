import { AgentProp } from "@/types/agent";
import SectionHeading from "./SectionHeading";

export default function AgentCard({
  image,
  title,
  designation,
  phone,
  whatsapp,
  email,
}: AgentProp) {
  return (
    <div
      className="agent-card shadow-sm p-3 p-md-4 mx-auto"
      style={{ maxWidth: "500px", borderRadius: "12px" }}
    >
      <div className="agent-header">
        {/* Agent Info */}
        <div className="d-flex align-items-center mb-3">
          <img
            src={image}
            alt={title}
            className="rounded"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
            }}
          />
          <div className="ms-3">
            <h5 className="mb-1">{title}</h5>

            <small className="text-muted">{designation}</small>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="d-flex gap-2 action-btns-wrapper">
          <a href={`tel:${phone || whatsapp}`} className="action-btns call-btn">
            <span>
              <img src="/assets/images/cal.svg" alt="" className="me-2" />
            </span>
            Call
          </a>

          <a
            href={`tel:${whatsapp || phone}`}
            className="action-btns wahtsapp-btn"
          >
            <span>
              <img src="/assets/images/whatsapp1.svg" alt="" className="me-2" />
            </span>
            WhatsApp
          </a>

          <a href={`mailto:${email}`} className="action-btns email-btn">
            <span>
              <img src="/assets/images/email.svg" alt="" className="me-2" />
            </span>
            EMAIL
          </a>
        </div>
      </div>

      {/* Heading */}
      <h4 className="mb-3">
        <SectionHeading text="Get In Touch With us!" />
      </h4>

      {/* Form */}
      <form>
        <div className="mb-3">
          <label className="form-label text-uppercase ">Your Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-uppercase ">Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="+971 55 9245456"
          />
        </div>

        <button type="submit" className="butn butn-primary-filled">
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  );
}
