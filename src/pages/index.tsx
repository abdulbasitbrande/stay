"use client";

import { categoryOptions } from "@/mockdata/home/categoryOptions";
import { properties } from "@/mockdata/properties";
import { smartCard } from "@/mockdata/home/smartCard";
import { locationCard } from "@/mockdata/home/locationCard";

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/home/Hero";
import SectionHeading from "@/components/SectionHeading";
import Carousel from "@/components/Carousel";
import CategorySelector from "@/components/CategorySelector";
import PropertyCard from "@/components/PropertyCard";
import SmartCard from "@/components/SmartCard";
import LocationCard from "@/components/LocationCard";

export default function Home() {
  return (
    <Layout mainClass="homepage">
      <HeroSection />

      <section className="project-section sec-padding">
        <div className="sec-wrapper project-section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <SectionHeading text="Properties chosen by insight, not instinct AI-driven acquisitions for stronger returns" />
              </div>

              <div className="col-lg-5">
                <CategorySelector
                  options={categoryOptions}
                  defaultValue="rent"
                />
              </div>
            </div>

            <div className="pt-4">
              <Carousel
                items={properties}
                renderItem={(item) => (
                  <PropertyCard
                    property={{
                      ...item,
                      variant: "small",
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="smartcard-section sec-padding">
        <div className="sec-wrapper smartcard-section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <SectionHeading text="We combine smart insights with expert management to elevate property performance." />
              </div>
            </div>
            <div className="row mt-4">
              {smartCard.map((item, idx) => (
                <div
                  key={idx}
                  className="col-12 col-sm-6 col-md-4 ico-box-wrapper"
                >
                  <SmartCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="locationcard-section sec-padding">
        <div className="sec-wrapper locationcard-section-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <SectionHeading text="Discover high-performing Dubai locations, selected through data-driven intelligence." />
              </div>
            </div>
            <div className="mt-4">
              <div className="location-grid">
                {locationCard.map((item) => (
                  <LocationCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
