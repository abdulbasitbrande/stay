// components/Header.jsx
"use client";

import Link from "next/link";
import { useEffect } from "react";


interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    // Header Start
    <>
      <header className={`header ${className ?? ""}`}>
        <div className="container">
          <div className="header-wrapper">
            <div className="leftbox">
              <Link href="/">
                <img src="/assets/images/logo.svg" alt="" />
              </Link>
            </div>
            <div className="rightbox">
              <nav className="header-menu">
                <ul className="menu-wrapper">
                  <li>
                    <Link href="/insights">Buy</Link>
                  </li>
                  <li>
                    <Link href="/">Rent</Link>
                  </li>
                  <li>
                    <Link href="/">Off-Plan</Link>
                  </li>
                  <li>
                    <Link href="/">Property Management</Link>
                  </li>
                  <li>
                    <Link href="/">Estimate My Property</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/">More</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Link 01</Link>
                      </li>
                      <li>
                        <Link href="/">Link 02</Link>
                      </li>
                      <li>
                        <Link href="/">Link 03</Link>
                      </li>
                      <li>
                        <Link href="/">Link 04</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="header-actions">
                <Link className="header-action butn butn-primary" href="/">
                  <span>Book With Us</span>
                </Link>
                <Link
                  className="header-action butn butn-primary-filled has-icon"
                  href="/"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                    >
                      <path
                        d="M8.03704 9H5.96296C2.67556 9 0 11.2575 0 14.0312V15.3438C0 15.7069 0.347407 16 0.777778 16H13.2222C13.6526 16 14 15.7069 14 15.3438V14.0312C14 11.2575 11.3244 9 8.03704 9ZM12.4444 14.6875H1.55556V14.0312C1.55556 11.9794 3.53111 10.3125 5.96296 10.3125H8.03704C10.4689 10.3125 12.4444 11.9794 12.4444 14.0312V14.6875Z"
                        fill="white"
                      />
                      <path
                        d="M7 8C9.20571 8 11 6.20571 11 4C11 1.79429 9.20571 0 7 0C4.79429 0 3 1.79429 3 4C3 6.20571 4.79429 8 7 8ZM7 1.14286C8.57714 1.14286 9.85714 2.42286 9.85714 4C9.85714 5.57714 8.57714 6.85714 7 6.85714C5.42286 6.85714 4.14286 5.57714 4.14286 4C4.14286 2.42286 5.42286 1.14286 7 1.14286Z"
                        fill="white"
                      />
                    </svg>
                    log in
                  </span>
                </Link>
                <Link className="header-action header-wa-btn" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_991)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.9942 0C8.96855 0 0 8.97106 0 19.9998C0 24.3737 1.41054 28.43 3.80834 31.7225L1.31632 39.1532L9.0037 36.6963C12.1655 38.7892 15.9387 40 20.0058 40C31.0314 40 40 31.0286 40 20.0002C40 8.97142 31.0314 0.000330607 20.0058 0.000330607L19.9942 0ZM14.4107 10.159C14.0229 9.23023 13.729 9.19506 13.1415 9.17117C12.9414 9.15955 12.7185 9.14795 12.4714 9.14795C11.707 9.14795 10.9079 9.37127 10.4259 9.86504C9.83836 10.4647 8.38069 11.8636 8.38069 14.7327C8.38069 17.6017 10.473 20.3765 10.755 20.7647C11.0489 21.1523 14.834 27.1253 20.7111 29.5596C25.307 31.4643 26.6708 31.2877 27.7167 31.0644C29.2447 30.7353 31.1608 29.606 31.6429 28.2425C32.1249 26.8784 32.1249 25.7143 31.9835 25.4674C31.8426 25.2205 31.4544 25.0798 30.8669 24.7855C30.2794 24.4915 27.4228 23.0806 26.8821 22.8924C26.3529 22.6926 25.8477 22.7633 25.4483 23.3278C24.884 24.1155 24.3317 24.9153 23.8848 25.3971C23.5322 25.7734 22.9559 25.8205 22.4743 25.6204C21.8277 25.3503 20.0178 24.7148 17.7842 22.7278C16.0561 21.1878 14.8808 19.2715 14.5401 18.6954C14.1991 18.1077 14.5049 17.7663 14.7749 17.449C15.0689 17.0844 15.3509 16.8259 15.6448 16.4847C15.9387 16.1439 16.1033 15.9674 16.2914 15.5676C16.4914 15.1796 16.35 14.7798 16.2091 14.4858C16.0681 14.1918 14.8927 11.3228 14.4107 10.159Z"
                        fill="#67C15E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_991">
                        <rect width="40" height="40" rx="6" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="mobile-navbar-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                  >
                    <rect
                      y="0.608688"
                      width="26"
                      height="1.69565"
                      fill="#101E33"
                    ></rect>
                    <rect
                      y="10.2174"
                      width="17.5217"
                      height="1.69565"
                      fill="#101E33"
                    ></rect>
                    <rect
                      y="19.826"
                      width="26"
                      height="1.69565"
                      fill="#101E33"
                    ></rect>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*  Header End*/}

      {/* Mobile Navbar Start*/}
      <div className="mobile-navbar-main">
        <div className="mobile-navbar">
          <div className="logo-close-btn-wrapper">
            <Link href="/" className="h-logo mb-logo d-block">
              <img src="/assets/images/logo.svg" alt="" />
            </Link>
            <span className="mobile-nav-close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8534 0.854534C10.8999 0.808051 10.9367 0.752868 10.9619 0.692136C10.9871 0.631403 11 0.56631 11 0.500574C11 0.434838 10.9871 0.369745 10.9619 0.309013C10.9367 0.24828 10.8999 0.193097 10.8534 0.146615C10.8069 0.100132 10.7517 0.0632602 10.691 0.038104C10.6303 0.0129478 10.5652 0 10.4994 0C10.4337 0 10.3686 0.0129478 10.3079 0.038104C10.2471 0.0632602 10.1919 0.100132 10.1455 0.146615L5.5 4.79308L0.854534 0.146615C0.808051 0.100132 0.752868 0.0632602 0.692136 0.038104C0.631403 0.0129478 0.56631 4.89774e-10 0.500574 0C0.434838 -4.89774e-10 0.369745 0.0129478 0.309013 0.038104C0.24828 0.0632602 0.193097 0.100132 0.146615 0.146615C0.100132 0.193097 0.0632602 0.24828 0.038104 0.309013C0.0129478 0.369745 -4.89774e-10 0.434838 0 0.500574C4.89774e-10 0.56631 0.0129478 0.631403 0.038104 0.692136C0.0632602 0.752868 0.100132 0.808051 0.146615 0.854534L4.79308 5.5L0.146615 10.1455C0.0527388 10.2393 0 10.3667 0 10.4994C0 10.6322 0.0527388 10.7595 0.146615 10.8534C0.240491 10.9473 0.367814 11 0.500574 11C0.633335 11 0.760658 10.9473 0.854534 10.8534L5.5 6.20692L10.1455 10.8534C10.2393 10.9473 10.3667 11 10.4994 11C10.6322 11 10.7595 10.9473 10.8534 10.8534C10.9473 10.7595 11 10.6322 11 10.4994C11 10.3667 10.9473 10.2393 10.8534 10.1455L6.20692 5.5L10.8534 0.854534Z"
                  fill="white"
                />
              </svg>
              <span>Close</span>
            </span>
          </div>
          <ul className="header-nav list-unstyled m-0 p-0">
            <li>
              <Link href="/">Buy</Link>
            </li>
            <li>
              <Link href="/">Rent</Link>
            </li>
            <li>
              <Link href="/">Off-Plan</Link>
            </li>
            <li>
              <Link href="/">Property Management</Link>
            </li>
            <li>
              <Link href="/">Estimate My Property</Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="/">More</Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/">Facility 01</Link>
                </li>
                <li>
                  <Link href="/">Facility 02</Link>
                </li>
                <li>
                  <Link href="/">Facility 03</Link>
                </li>
                <li>
                  <Link href="/">Facility 04</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="social-links">
            <Link className="social-link" href="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Navbar End */}
    </>
  );
}
