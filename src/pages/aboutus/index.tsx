import Layout from "@/components/layout/Layout";
import SmartCard from "@/components/sections/home/SmartCard";
import SectionHeading from "@/components/SectionHeading"
import InnerBannerSection from "@/components/sections/InnerBannerSection";
import { smartCard } from "@/mockdata/home/smartCard";
import Link from "next/link";

export const AboutUs = () => {
    return (
        <Layout headerClass="fixed-header" footerClass="no-bg"  mainClass="aboutuspage">
            <InnerBannerSection InnerBannerTitle="Bringing Intelligence and Transparency to Property Management" InnerBannerDescription={`<p>STAY was created to address a growing gap in Dubai’s real estate market the need for smarter, more transparent property management built around performance and technology. While many property owners struggle with fragmented services and inconsistent results, STAY brings together intelligent systems, market expertise, and operational excellence to simplify ownership. </p> <p>Our mission is to transform properties into high-performing assets, giving owners confidence, clarity, and stronger long-term returns.</p>`} InnerBannerButtonText="GET in touch with us!" InnerBannerButtonLink="#" InnerBannerImage="/assets/images/about-us-img.jpg" />

            <section className="smartcard-section about-smartcard-sec sec-padding">
                <svg className="aboutshape" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1919" height="1290" viewBox="0 0 1919 1290" fill="none">
                    <path d="M1919 0V1190C1919 1245.23 1874.23 1290 1819 1290H1418.12H0V132.568C0 110.477 17.9086 92.5682 40 92.5682H1287.11H1381.1C1397.87 92.5682 1413.19 83.0312 1420.59 67.9777L1441.91 24.5907C1449.31 9.53699 1464.63 0 1481.4 0H1919Z" fill="#F6F6F6" />
                </svg>
                <div className="sec-wrapper smartcard-section-wrapper position-relative">
                    <div className="container">
                        <div className="sec-title --is-medium has-spacing">
                            <SectionHeading text="Shaping the future of intelligent property ownership." />
                        </div>
                        <div className="row ">
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

            <section className="img-with-content-sec left-img-with-content-sec forJqueryOnly leftBoxforJqueryOnly is-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="imgbox has-border-radius">
                                <img className="fit-img" src="/assets/images/about-deep-expetise-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="contentbox">
                                <SectionHeading text="Built on Deep Expertise in Dubai’s Real Estate Market" />
                                <div className="content text-justify">
                                    <p>Dubai’s real estate landscape is dynamic, fast-moving, and highly competitive. At STAY, our deep understanding of the local market allows us to identify opportunities, optimize property performance, and navigate the complexities of the industry with confidence.</p>
                                    <p>From evolving regulations to emerging neighborhoods and investment trends, we leverage our market expertise to position every property for long-term value, stronger returns, and sustainable growth.</p>
                                </div>
                                <Link href="#" className="butn butn-primary-filled">
                                    <span>GET in touch with us!</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AboutUs;