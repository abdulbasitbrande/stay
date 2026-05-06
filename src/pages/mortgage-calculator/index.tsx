import Layout from "@/components/layout/Layout";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";
import InnerBannerSection from "@/components/sections/InnerBannerSection";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { mortgage } from "@/mockdata/mortgage/mortgage";
import AccordionsList from "@/components/sections/AccordionsList";
import { useState } from "react";

export const Mortgage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Layout headerClass="fixed-header">
            <InnerBannerSection {...mortgage} />
            <MortgageCalculator />

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

            <FormCtaWithImage {...mortgage} />
        </Layout >

    );
}

export default Mortgage;