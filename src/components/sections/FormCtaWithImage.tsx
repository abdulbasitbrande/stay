import SectionHeading from "@/components/SectionHeading";
import dynamic from "next/dynamic";
import { useState } from "react";
const Select = dynamic(() => import("react-select"), {
    ssr: false,
});

type OptionType = {
    value: string;
    label: string;
};

type FormDataProp = {
    formTitle: string;
    formImage: string;
    sectionClass?: string;
    imgPosition?: "left" | "right";
}

export const FormCtaWithImage = ({ formTitle, formImage, sectionClass, imgPosition = "right", }: FormDataProp) => {

    const [serviceList, setserviceList] = useState<OptionType | null>({
        value: "real-estate",
        label: "Real Estate",
    });

    const serviceListOptions: OptionType[] = [
        { value: "real-estate", label: "Real Estate", },
        { value: "property-management", label: "Property Management" },
    ];
    return (
        <section className={`form-cta-with-img-sec forJqueryOnly ${imgPosition === "left" ? "left-img leftBoxforJqueryOnly" : ""}  sec-bg-secondary ${sectionClass ?? ""}`}>
            <svg className="contactformshape" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1919" height="1023" viewBox="0 0 1919 1023" fill="none">
                <path d="M1919 3.29803V1022.3H1418.12H0V138.42C0 116.328 17.9086 98.4198 39.9999 98.4198H1237.11H1367.97C1384.72 98.4198 1400.01 88.9123 1407.43 73.8945L1431.79 24.5253C1439.26 9.40271 1454.71 -0.123047 1471.57 0.0012207L1919 3.29803Z" fill="#F5F5F5" />
            </svg>
            <div className="container">
                <div className="row ">
                    {imgPosition === "left" &&
                        < div className="col-lg-6">
                            <div className="imgbox">
                                <img className="fit-img" src={formImage} alt="" />
                            </div>
                        </div>
                    }
                    <div className="col-lg-6 align-self-lg-center">
                        <div className="form-wrapper has-right-space sec-padding  attach-with-footer">
                            <div className="sec-title has-spacing">
                                <SectionHeading text={formTitle} />
                            </div>
                            <form>
                                <div className="row g-0">

                                    <div className="col-lg-6">
                                        <div className="input-wrapper">
                                            <label htmlFor="">Your name</label>
                                            <input type="text" placeholder="Enter Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-wrapper">
                                            <label htmlFor="">Your Number</label>
                                            <input type="text" placeholder="Enter Your Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-wrapper">
                                            <label htmlFor="">email</label>
                                            <input type="email" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-wrapper">
                                            <label htmlFor="">which service are you interested in?</label>
                                            <Select
                                                options={serviceListOptions}
                                                value={serviceList}
                                                onChange={(selected: any) => setserviceList(selected)}
                                                className="w-100"
                                                classNamePrefix="custom-select"
                                                isSearchable={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-wrapper">
                                            <label htmlFor="">Notes</label>
                                            <input type="text" placeholder="Hello, I need a nice office space in JLT..." />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-wrapper submit-btn mb-0">
                                            <button className="butn butn-primary-filled">
                                                <span>Submit Request</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {imgPosition === "right" &&
                        < div className="col-lg-6">
                            <div className="imgbox">
                                <img className="fit-img" src={formImage} alt="" />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section >
    );
}

export default FormCtaWithImage;