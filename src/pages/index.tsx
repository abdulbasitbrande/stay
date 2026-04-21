import HeroSection from "@/components/sections/home/Hero";
import Layout from "@/components/layout/Layout";
import CategorySelector from "@/components/CategorySelector";
import { categoryOptions } from "@/mockdata/home/categoryOptions";
import { properties } from "@/mockdata/properties";
import PropertyCard from "@/components/PropertyCard";

export default function Home() {
  return (
    <Layout mainClass="homepage">
      <HeroSection />
      <section className="project-section sec-padding">
        <div className="sec-wrapper project-section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>
                  Properties chosen by insight, not instinct AI-driven
                  acquisitions for stronger returns
                </h2>
              </div>
              <div className="col-lg-6">
                <CategorySelector
                  options={categoryOptions}
                  defaultValue="rent"
                />
              </div>
            </div>
            <div className="row g-5 pt-4">
              {properties.map((item) => (
                <div key={item.id} className="col-12 col-sm-6 col-md-4">
                  <PropertyCard
                    property={{
                      ...item,
                      variant: "small",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
