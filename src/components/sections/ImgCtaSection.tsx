import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const ImgCtaSection = () => {
    return (
        <section className="img-cta-sec">
            <img className="sec-bg" src="/assets/images/pm-img-cta.jpg" alt="" />
            <div className="contentbox">
                <div className="container">
                    <div className="content-wrapper">
                        <SectionHeading className="cta-title" text="Looking to stay in Dubai? Browse our available properties" />
                        <span className="separator"></span>
                        <div className="content text-uppercase fw-semibold">
                            <h6>-Seamlessly managed. Effortlessly experienced-</h6>
                        </div>
                        <Link href="#" className="butn butn-primary"><span>Browse and Book</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImgCtaSection;