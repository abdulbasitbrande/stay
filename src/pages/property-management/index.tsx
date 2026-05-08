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
            <PmImgWithContent title="Why stay is a smarter way to host and earn?" description="<ul>
    <li>
        <h6>Pricing Optimisation</h6>
        <p>We adjust your nightly rate continuously based on Dubai demand, local events, seasonality, and competitor
            positioning, ensuring your property earns its maximum every single night.</p>
    </li>
    <li>
        <h6>Pricing Optimisation</h6>
        <p>We adjust your nightly rate continuously based on Dubai demand, local events, seasonality, and competitor
            positioning, ensuring your property earns its maximum every single night.</p>
    </li>
    <li>
        <h6>Pricing Optimisation</h6>
        <p>We adjust your nightly rate continuously based on Dubai demand, local events, seasonality, and competitor
            positioning, ensuring your property earns its maximum every single night.</p>
    </li>
    <li>
        <h6>Pricing Optimisation</h6>
        <p>We adjust your nightly rate continuously based on Dubai demand, local events, seasonality, and competitor
            positioning, ensuring your property earns its maximum every single night.</p>
    </li>
    <li>
        <h6>Pricing Optimisation</h6>
        <p>We adjust your nightly rate continuously based on Dubai demand, local events, seasonality, and competitor
            positioning, ensuring your property earns its maximum every single night.</p>
    </li>
</ul>" buttonLink="" buttonText="" image="/assets/images/pm-left-img.jpg" customClass="sec-bg-secondary" imagePosition="left" />

            <section className="before-after-sec">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="imgbox before-img">
                            <img className="main-img fit-img" src="/assets/images/before-img.jpg" alt="" />
                            <span className="ba-badge">before</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="imgbox after-img">
                            <img className="main-img fit-img" src="/assets/images/before-img.jpg" alt="" />
                            <span className="ba-badge">after</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="property-setup-sec">
                <div className="container">
                    <div className="sec-title --is-small has-spacing">
                        <SectionHeading text="Strategic Furnishing and Property Setup" />
                    </div>
                </div>
            </section>

            <section className="smartcard-section sec-padding">
                <div className="sec-wrapper smartcard-section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <SectionHeading text="Proactive Maintenance and Protection for Long-Term Property Value" />
                            </div>
                        </div>
                        <div className="row pt-5">
                            {smartCard.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="col-12 col-sm-6 col-md-4 ico-box-wrapper"
                                >
                                    <SmartCard {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="img-cta-cards-sec sec-padding">
                <div className="container">
                    <div className="sec-title has-gap one-row has-spacing">
                        <div className="leftbox">
                            <SectionHeading text="Still on a long-term tenancy? Here's what your property could be earning" />
                        </div>
                        <div className="rightbox align-self-md-center">
                            <div className="content has-btn">
                                <p>Our managed properties consistently outperform comparable long-term rental rates. Get in touch with us for a complimentary estimate tailored to your property.</p>
                            </div>
                            <Link href="#" className="butn butn-primary-filled">
                                <span>Get my free earnings estimate</span>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <Link href="#" className="d-block mainbox">
                                <div className="imgbox">
                                    <img className="fit-img" src="/assets/images/pm-imgcta-img-1.jpg" alt="" />
                                </div>
                                <div className="contentbox">
                                    <h5 className="text-uppercase">Long term rental</h5>
                                    <div className="content">
                                        <p>fixed annual income, no flexibility, no ability to react to market demand, tenant relationship to manage, property locked in for 12 months. </p>
                                    </div>
                                    <span className="butn butn-primary"><span>Get Free Consultation</span></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="#" className="d-block mainbox">
                                <div className="imgbox">
                                    <img className="fit-img" src="/assets/images/pm-imgcta-img-2.jpg" alt="" />
                                </div>
                                <div className="contentbox">
                                    <h5 className="text-uppercase">Get Free Consultation</h5>
                                    <div className="content">
                                        <p>fixed annual income, no flexibility, no ability to react to market demand, tenant relationship to manage, property locked in for 12 months. </p>
                                    </div>
                                    <span className="butn butn-primary"><span>Get Free Consultation</span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ImgCtaSection />

            {/* Faqs Section Start */}
            <section className="faqs-sec sec-padding --large">
                <div className="container">
                    <div className="sec-title one-row has-spacing">
                        <div className="leftbox">
                            <SectionHeading text="Strategic entry into Dubai’s most sought after off-plan launches." />
                        </div>
                        <div className="rightbox align-self-md-center">
                            <Link href="#" className="butn butn-primary-filled">
                                <span>Get In Touch With Us!</span>
                            </Link>
                        </div>
                    </div>
                    <div className="faqs-wrapper">
                        <div className="row">
                            {mortgage.FaqsList.map((item, index) => (
                                < div className="col-lg-6" key={index} >
                                    <AccordionsList faqTitle={item.faqTitle} FaqDescription={item.FaqDescription} faqKey={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Faqs Section End */}

            <FormCtaWithImage formTitle="Start Your Real Estate Journey With Us!" formImage="/assets/images/form-cta-img.jpg   " />
        </Layout>
    );
}

export default PropertyManagement;