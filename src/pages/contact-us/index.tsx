import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";
import Link from "next/link";

export const index = () => {
    return (
        <Layout headerClass="fixed-header">
            <section className="inner-banner-sec contact-us-banner-sec forJqueryOnly">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 has-top-space">
                            <div className="contentbox is-medium sec-padding --large">
                                <SectionHeading text="For enquiries or to connect with our team, please find our details below!" />
                                <div className="content mb-0">
                                    <ul>
                                        <li>
                                            <h6 className="text-uppercase fw-bold">You can visit us at:</h6>
                                            <Link href="#">Office no. XXXX, The Citadel Tower, Business Bay, Dubai, UAE</Link>
                                        </li>
                                        <li>
                                            <h6 className="text-uppercase fw-bold">you can email us directly via:</h6>
                                            <Link href="#">information@staydxb.ae</Link>
                                        </li>
                                        <li>
                                            <h6 className="text-uppercase fw-bold">you can call us directly:</h6>
                                            <Link href="#">+971 4 XXXXXXX</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="imgbox">
                                <img className="fit-img" src="/assets/images/form-cta-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FormCtaWithImage formTitle="Start Your Real Estate Journey With Us!" formImage="/assets/images/contact-us-img.jpg" imgPosition="left" />
        </Layout>
    );
}

export default index;