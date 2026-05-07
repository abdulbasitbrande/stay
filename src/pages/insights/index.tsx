"use client";

import CategorySelector from "@/components/CategorySelector";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/sections/BlogCard";
import FormCta from "@/components/sections/FormCta";
import SectionHeading from "@/components/SectionHeading";
import SortFilter from "@/components/SortFilter";
import { blogs } from "@/mockdata/insights/blogcard";
import { blogCategories } from "@/mockdata/insights/blogcategories";
import { useMemo, useState } from "react";

export const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState("blog");

  const filteredData = useMemo(() => {
    return blogs
      .filter((b) => b.category === selectedCategory)
      .slice(0, 10);
  }, [selectedCategory]);

  return (
    <Layout mainClass="insightspage">
      {/* Insights Section Start */}
      <section className="insights-sec blog-cards-sec sec-padding --small">
        <div className="container">

          <div className="sec-title --is-medium has-spacing has-scroll-animation">
            <SectionHeading text="Expert Perspectives on Dubai’s Property Market & Investment Opportunities" />
          </div>

          <div className="tab-links-wrapper d-flex justify-content-between">
            <div className="tab-links">
              <CategorySelector
                options={blogCategories}
                defaultValue={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>

            <SortFilter />
          </div>

          <div className="row g-0 custom-space">
            {filteredData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                <BlogCard hasCategory={true} data={item} />
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Insights Section End */}

      <FormCta />
    </Layout>
  );
};

export default Insights;