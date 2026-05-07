import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import RichTextRenderer from "../RichTextRenderer";

type PmImgWithContentProps = {
    title: string;
    description: string;
    buttonText: string,
    buttonLink: string,
    image: string;
    imagePosition?: "left" | "right";
    customClass?: string;
}

export const PmImgWithContent = ({ title, description, image, imagePosition = "left", buttonText, buttonLink, customClass }: PmImgWithContentProps) => {
    return (
        <section className={`pm-img-with-content-sec forJqueryOnly ${imagePosition === "left" ? "leftBoxforJqueryOnly pm-left-img-with-content-sec" : ""} ${customClass || ""} `}>
            <div className="container">
                <div className="row g-0">
                    {imagePosition === "right" &&
                        <div className="col-lg-6 align-self-center">
                            <div className="contentbox">
                                <SectionHeading text={title} />
                                <div className="content text-justify">
                                    <RichTextRenderer content={description} />
                                </div>
                                {buttonText &&
                                    <Link href={buttonLink} className="butn butn-primary-filled">
                                        <span>{buttonText}</span>
                                    </Link>
                                }
                            </div>
                        </div>
                    }
                    <div className="col-lg-6">
                        <div className="imgbox">
                            <img className="main-img fit-img" src={image} alt="" />
                            {imagePosition == "left" &&
                                <svg className="leftshapeimg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="981" height="1124" viewBox="0 0 981 1124" fill="none">
                                    <path d="M980.965 1123.5L979.526 23.9686C979.508 10.726 968.768 0 955.526 0H478.862H23.9993C10.731 0 -0.0197144 10.7662 -0.000671387 24.0344L1.43555 1024.73H361.386H494.818C511.746 1024.73 527.173 1034.44 534.492 1049.7L557.684 1098.06C564.995 1113.31 580.396 1123.01 597.304 1123.03L980.965 1123.5Z" fill="#A9BBDD" />
                                </svg>
                            }
                        </div>
                    </div>

                    {imagePosition === "left" &&
                        <div className="col-lg-6 align-self-center">
                            <div className="contentbox">
                                <SectionHeading text={title} />
                                <div className="content ">
                                    <RichTextRenderer content={description} />
                                </div>
                                {buttonText &&
                                    <Link href={buttonLink} className="butn butn-primary-filled">
                                        <span>{buttonText}</span>
                                    </Link>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default PmImgWithContent;