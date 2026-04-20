import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white mt-5">

            {/* Top Section */}
            <div className="container py-5">
                <div className="row">

                    {/* Logo & Description */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">MyApp</h5>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quos.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="/" className="text-secondary text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/about" className="text-secondary text-decoration-none">
                                    About
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/services" className="text-secondary text-decoration-none">
                                    Services
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact" className="text-secondary text-decoration-none">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Services</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none">
                                    Web Design
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none">
                                    Development
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none">
                                    SEO
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Contact</h6>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2">📧 info@myapp.com</li>
                            <li className="mb-2">📞 +92 300 1234567</li>
                            <li className="mb-2">📍 Karachi, Pakistan</li>
                        </ul>

                        {/* Social Icons */}
                        <div className="d-flex gap-3 mt-3">
                            <Link href="#" className="text-white fs-5">
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link href="#" className="text-white fs-5">
                                <i className="bi bi-instagram"></i>
                            </Link>
                            <Link href="#" className="text-white fs-5">
                                <i className="bi bi-twitter"></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-top border-secondary py-3">
                <div className="container d-flex justify-content-between align-items-center flex-wrap">
                    <p className="mb-0 text-secondary small">
                        © 2024 MyApp. All rights reserved.
                    </p>
                    <p className="mb-0 text-secondary small">
                        Made with ❤️ in Pakistan
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;