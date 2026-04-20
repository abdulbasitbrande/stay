import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    {/* Logo */}
                    <Link href="/" className="navbar-brand fw-bold fs-4">
                        MyApp
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item">
                                <Link
                                    href="/"
                                    className={`nav-link ${router.pathname === '/' ? 'active fw-bold' : ''}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/about"
                                    className={`nav-link ${router.pathname === '/about' ? 'active fw-bold' : ''}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/services"
                                    className={`nav-link ${router.pathname === '/services' ? 'active fw-bold' : ''}`}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/contact"
                                    className={`nav-link ${router.pathname === '/contact' ? 'active fw-bold' : ''}`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Button */}
                        <div className="ms-3">
                            <Link href="/contact" className="btn btn-primary">
                                Get Started
                            </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;