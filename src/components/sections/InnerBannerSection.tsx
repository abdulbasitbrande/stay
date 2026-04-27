import SectionHeading from "@/components/SectionHeading";

type InnerBannerProp = {
    InnerBannerTitle: string;
    InnerBannerDescription: string;
    InnerBannerButtonText: string;
    InnerBannerButtonLink: string;
    InnerBannerImage: string;
}

export const InnerBannerSection = ({ InnerBannerTitle, InnerBannerDescription, InnerBannerButtonText, InnerBannerButtonLink, InnerBannerImage }: InnerBannerProp) => {
    return (
        <section className="inner-banner-sec forJqueryOnly">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 has-top-space">
                        <div className="contentbox is-medium sec-padding --large">
                            <SectionHeading text={InnerBannerTitle} />
                            <div className="content text-justify">
                                <div dangerouslySetInnerHTML={{ __html: InnerBannerDescription }} />
                            </div>
                            <a href={InnerBannerButtonLink} className="butn butn-primary-filled">
                                <span>{InnerBannerButtonText}</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="imgbox">
                            <img className="fit-img" src={InnerBannerImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InnerBannerSection;