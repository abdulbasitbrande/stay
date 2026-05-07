import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import AccordionsList from "@/components/sections/AccordionsList";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";
import SmartCard from "@/components/sections/home/SmartCard";
import ImgCtaSection from "@/components/sections/ImgCtaSection";
import PmImgWithContent from "@/components/sections/PmimgWithContentSection";
import Stay from "@/components/Stay";
import { smartCard } from "@/mockdata/home/smartCard";
import { mortgage } from "@/mockdata/mortgage/mortgage";
import Link from "next/link";
import { useState } from "react";

export const PropertyManagement = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Layout>
            <section className="property-management-sec has-shape sec-padding --small pb-md-0">
                <div className="container">
                    <div className="sec-title has-gap one-row has-spacing">
                        <div className="leftbox">
                            <SectionHeading text="Dubai's short-term rental market is booming! Is your property keeping up?" />
                        </div>
                        <div className="rightbox align-self-md-center">
                            <div className="content has-btn">
                                <p>STAY is Dubai's boutique short-term rental management company. We handle everything from licensing, furnishing, guests, cleaning, pricing, and payouts, so you don't have to think about it once</p>
                            </div>
                            <Link href="#" className="butn butn-primary-filled">
                                <span>Get my free earnings estimate</span>
                            </Link>
                        </div>
                    </div>
                    <div className="imgbox">
                        <img className="fit-img main-img" src="/assets/images/property-management-banner-img.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="content-section pm-content-section sec-padding overflow-hidden position-relative sec-bg-transparent">
                <svg className="sec-bg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1919" height="723" viewBox="0 0 1919 723" fill="none">
                    <path d="M0 0V623C0 678.228 44.7716 723 100 723H500.882H1919V130.491C1919 108.399 1901.09 90.4908 1879 90.4908H1491.89H1410.61C1399.71 90.4908 1389.2 86.4455 1381.11 79.1384L1306.09 11.3524C1298 4.04535 1287.49 0 1276.59 0H0Z" fill="#F6F6F6" />
                </svg>
                <div className="sec-wrapper content-section-wrapper">
                    <Stay />
                    <div className="container position-relative">
                        <div className="row  align-items-center">
                            <div className="col-lg-6">
                                <SectionHeading
                                    className="mb-4"
                                    text="You're not just a number to us. We're fully focused on your property."
                                />
                                <div className="text-justify mb-4">
                                    We started STAY because we knew Dubai's short-term rental market was being underserved. Most management companies treat your property like a number. We treat it like our own. Since launching in October 2025, every property we manage has generated over AED 100,000, with strong occupancy and guests who come back.
                                    <br></br>
                                    <br></br>
                                    We're intentionally selective about who we work with, which means every owner gets our full attention, every time. This is hands-off property management done properly.
                                </div>
                                <Link href="#" className="see-more-btn">
                                    <span>SEE MORE</span>
                                    <span className="btn-arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" >
                                            <path d="M1 15.1555L15.1555 1M15.1555 1H2.41555M15.1555 1V13.7399" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter-sec sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contentbox">
                                <div className="counter-wrapper">
                                    <span className="counter-number">100</span>
                                    <span className="counter-prefix">K+</span>
                                </div>
                                <span className="separator"></span>
                                <div className="content text-uppercase">
                                    AED per property <br /> earned
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contentbox">
                                <div className="counter-wrapper">
                                    <span className="counter-number">80</span>
                                    <span className="counter-prefix">%</span>
                                </div>
                                <span className="separator"></span>
                                <div className="content text-uppercase">
                                    repeat guest <br /> rate
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contentbox">
                                <div className="counter-wrapper">
                                    <span className="counter-number">100</span>
                                    <span className="counter-prefix">%</span>
                                </div>
                                <span className="separator"></span>
                                <div className="content text-uppercase">
                                    hands- on  <br /> management
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PmImgWithContent title="End-to-end management for seamless property performance" description="<ul>
    <li>We're boutique by choice, your property is never one of hundreds</li>
    <li>We're boutique by choice, your property is never one of hundreds</li>
    <li>We're boutique by choice, your property is never one of hundreds</li>
    <li>We're boutique by choice, your property is never one of hundreds</li>
    <li>We're boutique by choice, your property is never one of hundreds</li>
</ul>" buttonLink="" buttonText="" image="/assets/images/pm-right-img.jpg" customClass="sec-bg-secondary has-only-list-title" imagePosition="right" />

        </Layout>
    );
}

export default PropertyManagement;