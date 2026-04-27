import { Career } from "@/types/careercard";
import Link from "next/link";

export const CareerCard = ({ id, title, description, careerTags, slug }: Career) => {
    return (
        <Link className="mainbox d-block" href={`careers/${slug}`}>
            <svg className="cardshape" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="644" height="240" viewBox="0 0 644 240" fill="none">
                <path d="M643.795 146.88L643.031 19.8797C642.965 8.88117 634.03 0 623.032 0H301.017H19.9999C8.92151 0 -0.0462646 9.00542 6.10352e-05 20.0837L0.837036 220.043C0.883118 231.056 9.82385 239.959 20.8369 239.959H220.789H377.792C385.716 239.959 392.892 235.281 396.091 228.031L417.752 178.928C420.951 171.678 428.127 167 436.051 167H623.795C634.888 167 643.862 157.972 643.795 146.88Z" fill="white" />
            </svg>
            <div className="contentbox">
                <h5 className="career-title text-uppercase fw-bold">{title}</h5>
                <div className="content fw-light">
                    <p>{description}</p>
                </div>
                <div className="career-tags-list">
                    {careerTags.map((careerTag, i) => (
                        <span key={i}>{careerTag}</span>
                    ))}
                </div>
            </div>
            <div className="btn-wrapper text-lg-end">
                <span className="butn butn-primary-filled">
                    <span>APPLY FOR THIS JOB</span>
                </span>
            </div>
        </Link>
    );
}

export default CareerCard;