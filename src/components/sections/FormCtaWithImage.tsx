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

export const FormCtaWithImage = () => {

    const [serviceList, setserviceList] = useState<OptionType | null>({
        value: "real-estate",
        label: "Real Estate",
    });

    const serviceListOptions: OptionType[] = [
        { value: "real-estate", label: "Real Estate", },
        { value: "property-management", label: "Property Management" },
    ];
    return (
        <section className='form-cta-with-img-sec forJqueryOnly  sec-bg-secondary'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="form-wrapper has-right-space sec-padding --medium">
                            <div className="sec-title has-spacing">
                                <SectionHeading text="Start Your Real Estate Journey With Us!" />
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
                    <div className="col-lg-6">
                        <div className="imgbox">
                            <img className="fit-img" src="/assets/images/form-cta-img.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FormCtaWithImage;