export interface MortgagePage {
    InnerBannerTitle: string;
    InnerBannerDescription: string;
    InnerBannerButtonText: string;
    InnerBannerButtonLink: string;
    InnerBannerImage: string;
    CalculatorTitle: string;
    FaqsListTitle: string;
    FaqsButtonText: string;
    FaqsButtonLink: string;
    FaqsList: {
        faqTitle: string;
        FaqDescription: string;
    }[];
    formTitle: string;
    formImage: string;

}