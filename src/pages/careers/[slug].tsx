import Layout from "@/components/layout/Layout";
import RichTextRenderer from "@/components/RichTextRenderer";
import SectionHeading from "@/components/SectionHeading";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";
import { careerdetail } from "@/mockdata/careers/careerdetail";
import Link from "next/link";

const CareerDetail = () => {

    return (
        <Layout mainClass="careerdetail">
            <section className="career-detail-sec sec-padding --medium">
                <div className="container">
                    <div className="sec-title --is-medium has-spacing">
                        <SectionHeading text={careerdetail.careerTitle} />
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-8">
                            <div className="career-details-wrapper">
                                <div className="career-detailbox">
                                    <h4 className="cd-title fw-bold text-uppercase">{careerdetail.jobOverviewTitle}</h4>
                                    <div className="content fw-light">
                                        <RichTextRenderer content={careerdetail.jobOverviewDescription} />
                                    </div>
                                </div>
                                <div className="career-detailbox">
                                    <h4 className="cd-title fw-bold text-uppercase">{careerdetail.keyResponsibilitiesTitle}</h4>
                                    <div className="content fw-light">
                                        <RichTextRenderer content={careerdetail.keyResponsibilitiesDescription} />
                                    </div>
                                </div>
                                <div className="career-detailbox">
                                    <h4 className="cd-title fw-bold text-uppercase">{careerdetail.requirementTitle}</h4>
                                    <div className="content fw-light">
                                        <RichTextRenderer content={careerdetail.requirementDescription} />
                                    </div>
                                    <div className="btn-wrapper">
                                        <Link href={careerdetail.applyNowButtonLink} className="butn butn-primary-filled">
                                            <span>APPLY FOR THIS JOB</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="career-sidebar">
                                <h4 className="career-sidebar-title fw-bold text-uppercase">More DETAILS</h4>
                                <ul>
                                    {careerdetail.moreDetails.map((moredetail) => (
                                        <li>
                                            <h5 className="fw-semibold text-uppercase">{moredetail.moreDetailTitle}</h5>
                                            <span className="fw-light">{moredetail.moreDetailDescription}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form CTA With Image Section Start */}
            <FormCtaWithImage formTitle={careerdetail.formTitle} formImage={careerdetail.formImage} />
            {/* Form CTA With Image Section End */}
        </Layout>
    );
}

export default CareerDetail;