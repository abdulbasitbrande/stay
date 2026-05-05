import { useState } from "react";
import RichTextRenderer from "../RichTextRenderer";

type AccordionsListProps = {
    faqKey: number,
    faqTitle: string;
    FaqDescription: string;
    activeIndex: number,
    setActiveIndex: (val: number) => void
}

export const AccordionsList = ({ faqKey, faqTitle, FaqDescription, activeIndex, setActiveIndex }: AccordionsListProps) => {
    return (
        <div className={`accordion-main ${faqKey === activeIndex ? 'active' : ''} `} key={faqKey}>
            <div className="accordion-question" onClick={() => setActiveIndex(faqKey === activeIndex ? -1 : faqKey)}>
                <h6 className="text-uppercase fw-semibold mb-0">{faqTitle}</h6>
                <span className="accordion-btn"></span>
            </div>
            <div className="accordion-answer">
                <div className="content">
                    <RichTextRenderer content={FaqDescription} />
                </div>
            </div>
        </div>

    );
}

export default AccordionsList;