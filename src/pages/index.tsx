"use client";

import { categoryOptions } from "@/mockdata/home/categoryOptions";
import { properties } from "@/mockdata/properties";
import { smartCard } from "@/mockdata/home/smartCard";
import { locationCard } from "@/mockdata/home/locationCard";
import { offplanProperties } from "@/mockdata/home/offplanProperties";
import { Features } from "@/mockdata/home/features";
import { brands } from "@/mockdata/brands";
import { blogs } from "@/mockdata/insights/blogcard";
import { solutionItems } from "@/mockdata/home/solutionItems";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import HeroSection from "@/components/sections/home/Hero";
import SectionHeading from "@/components/SectionHeading";
import Carousel from "@/components/Carousel";
import CategorySelector from "@/components/CategorySelector";
import PropertyCard from "@/components/PropertyCard";
import SmartCard from "@/components/sections/home/SmartCard";
import LocationCard from "@/components/sections/home/LocationCard";
import OffplanProperties from "@/components/sections/home/OffplanProperties";
import Stay from "@/components/Stay";
import FeatureCircles from "@/components/sections/home/FeatureCircles";
import BrandsCard from "@/components/Brands";
import BlogCard from "@/components/sections/BlogCard";
import Solution from "@/components/Solution";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";

export default function Home() {
  return (
    <Layout mainClass="homepage">
      <HeroSection />

      <section className="project-section sec-padding">
        <div className="sec-wrapper project-section-wrapper default-navi">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <SectionHeading text="Properties chosen by insight, not instinct AI-driven acquisitions for stronger returns" />
              </div>

              <div className="col-lg-5">
                <CategorySelector
                  options={categoryOptions}
                  defaultValue="buy"
                />
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

      <section className="smartcard-section sec-padding">
        <div className="sec-wrapper smartcard-section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <SectionHeading text="We combine smart insights with expert management to elevate property performance." />
              </div>
            </div>
            <div className="row pt-5">
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
            <div className="pt-5">
              <div className="location-grid">
                {locationCard.map((item) => (
                  <LocationCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section sec-padding overflow-hidden position-relative">
        <div className="sec-wrapper content-section-wrapper">
          <Stay />
          <div className="container position-relative">
            <div className="row vh-100 align-items-center">
              <div className="col-lg-6">
                <SectionHeading
                  className="mb-4"
                  text="Transforming Properties into High-Performing Assets"
                />
                <div className="text-justify">
                  At STAY, we deliver comprehensive, intelligence-driven
                  property management and investment solutions designed for
                  Dubai’s evolving real estate landscape. By combining advanced
                  AI-powered analytics with deep market expertise, we help
                  property owners, investors.
                  <br></br>
                  <br></br>
                  Our approach goes beyond traditional management. We leverage
                  real-time data, predictive insights, and strategic asset
                  positioning to ensure every property under our care operates
                  at its highest potential.
                </div>
                <Link href="/" className="plain-btn mt-5">
                  Learn more
                  <span>
                    <img src="assets/images/arrow-tilt.svg" alt="" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offplan-projects sec-padding">
        <div className="sec-wrapper offplan-projects-section-wrapper default-navi">
          <div className="container">
            <div className="sec-title one-row has-spacing">
              <div className="leftbox">
                <SectionHeading text="Strategic entry into Dubai’s most sought after off-plan launches." />
              </div>
              <div className="rightbox align-self-md-center">
                <Link href="#" className="see-more-btn secondary-bg">
                  <span>SEE MORE</span>
                  <span className="btn-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M1 15.1555L15.1555 1M15.1555 1H2.41555M15.1555 1V13.7399"
                        stroke="#2E2E2E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* <div className="row align-items-center">
              <div className="col-lg-7">
                <SectionHeading text="" />
              </div>

              <div className="col-lg-5 text-end">
                <Link href="/" className="plain-btn mt-5">
                  See more
                  <span>
                    <img src="assets/images/arrow-tilt1.svg" alt="" />
                  </span>
                </Link>
              </div>
            </div> */}

            <div>
              <Carousel
                items={offplanProperties}
                renderItem={(item) => <OffplanProperties {...item} />}
                pagination={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section sec-padding position-relative overflow-hidden">
        <div className="sec-wrapper faq-section-wrapper">
          <img src="/assets/images/faq-bg.svg" alt="" id="faq-bg" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <SectionHeading text="Bespoke real estate solutions crafted for performance and growth." />
              </div>
            </div>

            <div className="pt-5">
              <Solution
                SolutionItem={solutionItems.SolutionItem}
                image={solutionItems.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="featurecircle-section sec-padding">
        <div className="sec-wrapper featurecircle-section-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <SectionHeading text="Discover high-performing Dubai locations, selected through data-driven intelligence." />
              </div>
            </div>
            <div className="pt-5">
              <FeatureCircles items={Features} />
            </div>
          </div>
        </div>
      </section>

      <FormCtaWithImage
        formImage="assets/images/homecta.jpg"
        formTitle="Start Your Real Estate Journey With Us!"
        sectionClass="mb-0"
      />

      <section className="brands-section sec-padding">
        <div className="sec-wrapper brands-section-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <SectionHeading text="Discover high-performing Dubai locations, selected through data-driven intelligence." />
              </div>
            </div>
            <div className="pt-5">
              <div className="brands-logo-wrapper">
                {brands.map((item) => (
                  <BrandsCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Section Start */}
      <section className="related-sec insights-sec sec-padding sec-bg-secondary default-navi">
        <div className="container">
          <div className="sec-title one-row has-spacing">
            <div className="leftbox">
              <SectionHeading text="Smarter entry points into Dubai’s newest developments." />
            </div>
            <div className="rightbox align-self-md-center">
              <Link href="#" className="see-more-btn">
                <span>SEE MORE</span>
                <span className="btn-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M1 15.1555L15.1555 1M15.1555 1H2.41555M15.1555 1V13.7399"
                      stroke="#2E2E2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="realted-insights-wrapper">
            <Carousel
              items={blogs}
              renderItem={(blog) => (
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  date={blog.date}
                  image={blog.image}
                  slug={blog.slug}
                  hasCategory={blog.hasCategory}
                />
              )}
              pagination={true}
              enabled={{ desktop: false }}
              gridCols={{ desktop: 3 }}
              limitItems={{ desktop: 3, mobile: 4 }}
            />
          </div>
        </div>
      </section>
      {/* Related Section End */}
    </Layout>
  );
}
