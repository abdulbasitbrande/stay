import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import RichTextRenderer from "../RichTextRenderer";

type ImgWithContentProps = {
    title: string;
    description: string;
    buttonText: string,
    buttonLink: string,
    image: string;
    imagePosition?: "left" | "right";
    customClass?: string;
}

export const ImgWithContent = ({ title, description, image, imagePosition = "left", buttonText, buttonLink, customClass }: ImgWithContentProps) => {
    return (
        <section className={`img-with-content-sec forJqueryOnly ${imagePosition === "left" ? "leftBoxforJqueryOnly left-img-with-content-sec" : ""} ${customClass || ""} `}>
            <div className="container">
                <div className="row">

                    {imagePosition === "right" &&
                        <div className="col-lg-6 align-self-center">
                            <div className="contentbox">
                                <SectionHeading text={title} />
                                <div className="content text-justify">
                                    <RichTextRenderer content={description} />
                                </div>
                                <Link href={buttonLink} className="butn butn-primary-filled">
                                    <span>{buttonText}</span>
                                </Link>
                            </div>
                        </div>
                    }

                    <div className="col-lg-6">
                        <div className="imgbox has-border-radius">
                            <img className="fit-img" src={image} alt="" />
                        </div>
                    </div>

                    {imagePosition === "left" &&
                        <div className="col-lg-6 align-self-center">
                            <div className="contentbox">
                                <SectionHeading text={title} />
                                <div className="content text-justify">
                                    <RichTextRenderer content={description} />
                                </div>
                                <Link href={buttonLink} className="butn butn-primary-filled">
                                    <span>{buttonText}</span>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default ImgWithContent;