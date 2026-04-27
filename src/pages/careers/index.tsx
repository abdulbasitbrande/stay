import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import CareerCard from "@/components/sections/CareerCard";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";
import InnerBannerSection from "@/components/sections/InnerBannerSection";
import { careers } from "@/mockdata/careers/careercards";
import { careerpage } from "@/mockdata/careers/careerpage";
import Link from "next/link";


export const Careers = () => {
    return (
        <Layout mainClass="careerspage" headerClass="fixed-header">
            {/* Inner Banner Section Start */}
            <InnerBannerSection InnerBannerTitle={careerpage.bannerTitle} InnerBannerDescription={careerpage.bannerDescription} InnerBannerButtonText={careerpage.bannerButtonTitle} InnerBannerButtonLink={careerpage.bannerButtonLink} InnerBannerImage={careerpage.bannerImage} />
            {/* Inner Banner Section End */}

            {/* Careers List Section Start */}
            <section className="careers-list-sec sec-padding --large">
                <svg className="careersshape" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1919" height="1290" viewBox="0 0 1919 1290" fill="none">
                    <path d="M1919 0V1190C1919 1245.23 1874.23 1290 1819 1290H1418.12H0V132.568C0 110.477 17.9086 92.5682 40 92.5682H1287.11H1381.1C1397.87 92.5682 1413.19 83.0312 1420.59 67.9777L1441.91 24.5907C1449.31 9.53699 1464.63 0 1481.4 0H1919Z" fill="#F6F6F6" />
                </svg>
                <div className="container">
                    <div className="sec-title --is-medium has-spacing">
                        <SectionHeading text="Open Positions for Talented Individuals Ready to Grow" />
                    </div>
                    <div className="row g-0">
                        {careers.map((career) => (
                            <div className="col-lg-6 col-md-6">
                                <CareerCard key={career.id} id={career.id} title={career.title} description={career.description} careerTags={career.careerTags} slug={career.slug} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Careers List Section End */}

            {/* Form CTA With Image Section Start */}
            <FormCtaWithImage formTitle={careerpage.formTitle} formImage={careerpage.formImage} />
            {/* Form CTA With Image Section End */}
        </Layout>
    );
}

export default Careers;