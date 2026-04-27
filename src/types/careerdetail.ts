export interface CareerDetail {
    id: number;
    careerTitle: string;
    jobOverviewTitle: string,
    jobOverviewDescription: string,
    keyResponsibilitiesTitle: string;
    keyResponsibilitiesDescription: string;
    requirementTitle: string;
    requirementDescription: string;
    applyNowButtonLink: string;
    moreDetails: {
        moreDetailTitle: string;
        moreDetailDescription: string;
    }[];
    formTitle: string;
    formImage: string;
}