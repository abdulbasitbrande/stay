import SectionHeading from "@/components/SectionHeading";

export const FormCta = () => {
    return (
        <section className='form-cta-sec sec-padding sec-bg-secondary'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="contentbox --medium">
                            <div className="sec-title is-tb-space">
                                <SectionHeading  text="Subscribe for the latest insights, property opportunities, and market updates." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="form-wrapper">
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
                                    <div className="col-lg-12">
                                        <div className="input-wrapper">
                                            <label htmlFor="">email</label>
                                            <input type="text" placeholder="Enter Email" />
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
                </div>
            </div>
        </section>
    );
}

export default FormCta;