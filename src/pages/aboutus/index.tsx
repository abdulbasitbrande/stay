import Layout from "@/components/layout/Layout";
import SmartCard from "@/components/sections/home/SmartCard";
import SectionHeading from "@/components/SectionHeading";
import InnerBannerSection from "@/components/sections/InnerBannerSection";
import Link from "next/link";
import { aboutus } from "@/mockdata/aboutus/aboutus";
import ImgWithContent from "@/components/sections/ImgWithContentSection";

export const AboutUs = () => {
    return (
        <Layout headerClass="fixed-header" footerClass="no-bg" mainClass="aboutuspage">
            <InnerBannerSection InnerBannerTitle={aboutus.bannerTitle} InnerBannerDescription={aboutus.bannerDescription} InnerBannerButtonText={aboutus.bannerButtonText} InnerBannerButtonLink={aboutus.bannerButtonLink} InnerBannerImage={aboutus.bannerImage} />

            <section className="smartcard-section about-smartcard-sec sec-padding">
                <svg className="aboutshape" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1919" height="1290" viewBox="0 0 1919 1290" fill="none">
                    <path d="M1919 0V1190C1919 1245.23 1874.23 1290 1819 1290H1418.12H0V132.568C0 110.477 17.9086 92.5682 40 92.5682H1287.11H1381.1C1397.87 92.5682 1413.19 83.0312 1420.59 67.9777L1441.91 24.5907C1449.31 9.53699 1464.63 0 1481.4 0H1919Z" fill="#F6F6F6" />
                </svg>
                <div className="sec-wrapper smartcard-section-wrapper position-relative">
                    <div className="container">
                        <div className="sec-title --is-medium has-spacing">
                            <SectionHeading text={aboutus.smartCardsTitle} />
                        </div>
                        <div className="row ">
                            {aboutus.smartCards.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="col-12 col-sm-6 col-md-4 ico-box-wrapper"
                                >
                                    <SmartCard title={item.smartCardTitle} description={item.smartCardDescription} icon={item.smartCardIcon} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ImgWithContent title={aboutus.imgWithContentTitle} description={aboutus.imgWithContentDescription} buttonText={aboutus.imgWithContentButtonText} buttonLink={aboutus.imgWithContentButtonLink} image={aboutus.imgWithContentImage} imagePosition="left" customClass="is-footer" />
        </Layout>
    );
}

export default AboutUs;