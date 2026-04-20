import Link from "next/link";

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer-custom mt-5">
      <div className="container py-5">
        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold fs-4">
          <div style={{ width: "165px", height: "77px" }}>
            <img src="/assets/images/foo-logo.svg" alt="Logo" width="100%" />
          </div>
        </Link>

        {/* Grid */}
        <div className="row gy-4">
          {[
            {
              title: "QUICK LINKS",
              items: [
                "Homepage",
                "About Us",
                "Contact Us",
                "Developers",
                "Areas",
              ],
            },
            {
              title: "LUXURY PROPERTIES",
              items: [
                "New Properties",
                "Waterfront",
                "Residences",
                "Luxury",
                "Off Plan",
              ],
            },
            {
              title: "SERVICES",
              items: [
                "Property Valuation",
                "Mortgage",
                "List Property",
                "Snagging",
              ],
            },
            {
              title: "RESOURCES",
              items: ["Podcasts", "Blogs", "News", "Guides"],
            },
            {
              title: "BUY A PROPERTY",
              items: ["New Property", "Residential", "Commercial", "Luxury"],
            },
          ].map((col, i) => (
            <div key={i} className="col-6 col-sm-6 col-md-4 col-lg-2">
              <h6 className="fw-bold">{col.title}</h6>
              <ul className="list-unstyled small text-muted">
                {col.items.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-top mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted text-center text-md-start">
          <p className="mb-2 mb-md-0">ALL RIGHTS RESERVED - HOUSINOVA 2025</p>

          <div className="d-flex gap-2 mb-2 mb-md-0">
            <div
              className="bg-dark rounded-circle"
              style={{ width: 28, height: 28 }}
            ></div>
            <div
              className="bg-dark rounded-circle"
              style={{ width: 28, height: 28 }}
            ></div>
            <div
              className="bg-dark rounded-circle"
              style={{ width: 28, height: 28 }}
            ></div>
          </div>

          <p className="mb-0">PRIVACY POLICY | TERMS & CONDITIONS</p>
        </div>
      </div>
    </footer>
  );
}
