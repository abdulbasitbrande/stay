import Link from "next/link";

interface Footer {
  footerClass?: string
}
// components/Footer.jsx
export default function Footer({ footerClass }: Footer) {
  return (
    <footer className={`footer-sec ${footerClass ?? ''}`}>
      <svg className="footer-shape" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1920 656" fill="none">
        <path d="M501.948 0H-7C-25.2254 0 -40 14.7746 -40 33V364.5V696C-40 714.225 -25.2254 729 -6.99998 729H1937C1955.23 729 1970 714.225 1970 696V410.967V125.934C1970 107.708 1955.23 92.9337 1937 92.9337H1117.44H627.851C619.515 92.9337 611.487 89.7786 605.382 84.1024L524.418 8.8313C518.312 3.15509 510.285 0 501.948 0Z" fill="white" />
      </svg>
      <img className="footer-bg-shape" src="/assets/images/footer-bg-shape-img.svg" alt="" />
      <div className="container">
        {/* Logo */}
        <div className="footer-logo-wrapper">
          <Link href="/" className="footer-logo">
            <img src="/assets/images/foo-logo.svg" alt="Logo" />
          </Link>
        </div>

        {/* Grid */}
        <div className="footer-wrapper">
          {[
            {
              title: "QUICK LINKS",
              items: [
                {
                  title: "Homepage",
                  url: "/"
                },
                {
                  title: "About Us",
                  url: "/about-us"
                },
                {
                  title: "Contact Us",
                  url: "/contact-us"
                },
                {
                  title: "Developers",
                  url: "#"
                },
                {
                  title: "Areas",
                  url: "#"
                }
              ],
            },
            {
              title: "LUXURY PROPERTIES",
              items: [
                {
                  title: "New Properties",
                  url: "/"
                },
                {
                  title: "Waterfront",
                  url: "/"
                },
                {
                  title: "Residences",
                  url: "/"
                },
                {
                  title: "Luxury",
                  url: "/"
                },
                {
                  title: "Off Plan",
                  url: "/"
                },
              ],
            },
            {
              title: "SERVICES",
              items: [
                {
                  title: "Property Valuation",
                  url: "/"
                },
                {
                  title: "Mortgage",
                  url: "/mortgage-calculator"
                },
                {
                  title: "List Property",
                  url: "#"
                },
                {
                  title: "Snagging",
                  url: "#"
                },
              ],
            },
            {
              title: "RESOURCES",
              items: [
                {
                  title: "Podcasts",
                  url: "#"
                },
                {
                  title: "Blogs",
                  url: "/insights"
                },
                {
                  title: "News",
                  url: "#"
                },
                {
                  title: "Guides",
                  url: "#"
                },
              ],
            },
            {
              title: "BUY A PROPERTY",
              items: [
                {
                  title: "New Property",
                  url: "#"
                },
                {
                  title: "Residential",
                  url: "#"
                },
                {
                  title: "Commercial",
                  url: "#"
                },
                {
                  title: "Luxury",
                  url: "#"
                },
              ],
            },
          ].map((col, i) => (
            <div key={i} className="footer-col">
              <h6 className="footer-col-title fw-bold">{col.title}</h6>
              <ul className="footer-menu list-unstyled">
                {col.items.map((item, idx) => (
                  <li key={idx} className="fw-light" >
                    <Link href="/">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="copyright-text fb-col">
            <p className="fw-medium mb-0 text-uppercase">ALL RIGHTS RESERVED - Stay 2026</p>
          </div>
          <div className="footer-social-links d-flex">
            <Link href="#" className="social-link" >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M9.03 0H3.69727C1.38091 0 0 1.38091 0 3.69727V9.02364C0 11.3464 1.38091 12.7273 3.69727 12.7273H9.02364C11.34 12.7273 12.7209 11.3464 12.7209 9.03V3.69727C12.7273 1.38091 11.3464 0 9.03 0ZM6.36364 8.83273C5.00182 8.83273 3.89455 7.72545 3.89455 6.36364C3.89455 5.00182 5.00182 3.89455 6.36364 3.89455C7.72545 3.89455 8.83273 5.00182 8.83273 6.36364C8.83273 7.72545 7.72545 8.83273 6.36364 8.83273ZM10.1309 3.10545C10.0991 3.18182 10.0545 3.25182 9.99727 3.31545C9.93364 3.37273 9.86364 3.41727 9.78727 3.44909C9.71091 3.48091 9.62818 3.5 9.54545 3.5C9.37364 3.5 9.21455 3.43636 9.09364 3.31545C9.03636 3.25182 8.99182 3.18182 8.96 3.10545C8.92818 3.02909 8.90909 2.94636 8.90909 2.86364C8.90909 2.78091 8.92818 2.69818 8.96 2.62182C8.99182 2.53909 9.03636 2.47545 9.09364 2.41182C9.24 2.26545 9.46273 2.19545 9.66636 2.24C9.71091 2.24636 9.74909 2.25909 9.78727 2.27818C9.82545 2.29091 9.86364 2.31 9.90182 2.33545C9.93364 2.35455 9.96545 2.38636 9.99727 2.41182C10.0545 2.47545 10.0991 2.53909 10.1309 2.62182C10.1627 2.69818 10.1818 2.78091 10.1818 2.86364C10.1818 2.94636 10.1627 3.02909 10.1309 3.10545Z" fill="white" />
              </svg>
            </Link>
            <Link href="#" className="social-link" >
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.67094 3.32657C5.97552 3.04429 6.44701 3.07506 6.48162 3.0766L8.45448 3.07583L8.49756 0.229207L8.19989 0.156136C8.00915 0.109227 7.42536 0 6.13857 0C3.84728 0 2.30744 1.60368 2.30744 3.98957V4.63028H0V7.70687H2.30744V13.0909H5.38404V7.70686H7.81609L8.23912 4.63028H5.38405V4.15878C5.38405 3.78421 5.48095 3.50348 5.67094 3.32657Z" fill="white" />
              </svg>
            </Link>
            <Link href="#" className="social-link" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.80327 12.218C10.5664 12.218 13.7187 7.51675 13.7187 3.44031C13.7187 3.30648 13.7187 3.17366 13.7096 3.04134C14.3228 2.60527 14.852 2.06385 15.2727 1.44434C14.7015 1.69395 14.0944 1.85764 13.4736 1.92982C14.1273 1.54413 14.6168 0.938185 14.8512 0.223192C14.2357 0.582567 13.5629 0.836199 12.8612 0.972287C11.6745 -0.269745 9.68978 -0.329922 8.42749 0.838427C7.61422 1.59176 7.26829 2.71497 7.52106 3.78633C5.00182 3.66153 2.6544 2.49019 1.06298 0.563249C0.231382 1.97293 0.656727 3.77564 2.03356 4.68085C1.53491 4.66656 1.04695 4.53438 0.610909 4.2953V4.33445C0.611673 5.80279 1.6632 7.06709 3.1248 7.35805C2.66356 7.4821 2.17942 7.50009 1.71055 7.41062C2.12062 8.66769 3.29738 9.52869 4.63756 9.5535C3.528 10.4121 2.15727 10.8783 0.746073 10.8768C0.497128 10.8761 0.248182 10.8618 0 10.8324C1.43335 11.7377 3.10036 12.218 4.80327 12.2158" fill="white" />
              </svg>
            </Link>
            <Link href="#" className="social-link" >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.1818 12.8926H11.0474V8.36031C11.0474 7.174 10.5572 6.36414 9.47901 6.36414C8.65435 6.36414 8.19573 6.91065 7.98227 7.43735C7.90222 7.6264 7.91473 7.88975 7.91473 8.1531V12.8926H4.80955C4.80955 12.8926 4.84957 4.86412 4.80955 4.13434H7.91473V5.50888C8.09818 4.90788 9.09043 4.05013 10.6739 4.05013C12.6384 4.05013 14.1818 5.30992 14.1818 8.02267V12.8926ZM1.66933 3.03884H1.64932C0.648723 3.03884 0 2.36932 0 1.52065C0 0.655481 0.667899 0 1.68851 0C2.70829 0 3.33533 0.653838 3.35534 1.51819C3.35534 2.36685 2.70828 3.03884 1.66933 3.03884ZM0.357705 4.13434H3.12187V12.8926H0.357705V4.13434Z" fill="white" />
              </svg>
            </Link>
          </div>
          <div className="footer-policies-links text-uppercase fw-medium fb-col">
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">terms & conditions</Link>
            <span>|</span>
            <Link href="#">cookie policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
