import { useRouter } from "next/router";
import { properties } from "@/mockdata/properties";
import Layout from "@/components/layout/Layout";
import Gallery from "@/components/Gallery";
import PropertyInfoBlock from "@/components/InfoBlock";
import PropertyAmenitiesBlock from "@/components/AmenitiesBlock";
import MortgageCalculatorForm from "@/components/MortgageCalculatorForm";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";
import Carousel from "@/components/Carousel";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";

export default function DetailPage() {
  const { query } = useRouter();

  const property = properties.find(
    (p) => p.projectData.projectCard.slug === query.slug,
  );

  if (!property) return <div>Loading...</div>;

  const projectCard = property.projectData.projectCard;

  return (
    <Layout>
      <div className="project-detail pt-5">
        <Gallery galleryItem={property.projectData.gallery.galleryItem} />

        <div className="container project-data">
          <div className="row">
            <div className="col-md-8 project-info">
              <PropertyInfoBlock
                location={projectCard.location}
                price={projectCard.price}
                title={projectCard.title}
                tags={projectCard.tags}
              />
              <PropertyAmenitiesBlock amenities={projectCard.amenities} />
              <MortgageCalculatorForm variant={1} />
            </div>

            <div className="col-md-4 project-sidebar ps-3 ps-lg-5"></div>
          </div>
        </div>
        <div className="row">
          <section className="project-section sec-padding">
            <div className="sec-wrapper project-section-wrapper default-navi">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <SectionHeading text="Properties chosen by insight, not instinct AI-driven acquisitions for stronger returns" />
                  </div>
                </div>

                <div className="pt-5">
                  <Carousel
                    items={properties}
                    renderItem={(item) => (
                      <PropertyCard
                        property={{
                          ...item.projectData.projectCard,
                          variant: "small",
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <FormCtaWithImage
            formImage="assets/images/pd.jpg"
            formTitle="Start Your Real Estate Journey With Us!"
          />
        </div>
      </div>
    </Layout>
  );
}
