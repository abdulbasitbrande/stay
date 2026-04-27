import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";


const CareerDetail = () => {

    return (
        <Layout mainClass="careerdetail">
            <section className="career-detail-sec sec-padding --small">
                <div className="container">
                    <div className="sec-title --is-medium has-spacing">
                        <SectionHeading text="Open Positions for Talented Individuals Ready to Grow" />
                    </div>
                </div>
            </section>

            {/* Form CTA With Image Section Start */}
            <FormCtaWithImage formTitle="Start Your Real Estate Journey With Us!" formImage="/assets/images/form-cta-img.jpg" />
            {/* Form CTA With Image Section End */}
        </Layout>
    );
}

export default CareerDetail;