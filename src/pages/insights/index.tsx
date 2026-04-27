
import CategorySelector from '@/components/CategorySelector';
import Layout from '@/components/layout/Layout';
import BlogCard from '@/components/sections/BlogCard';
import FormCta from '@/components/sections/FormCta';
import SectionHeading from "@/components/SectionHeading";
import SortFilter from '@/components/SortFilter';
import { blogs } from '@/mockdata/insights/blogcard';
import { blogCategories } from '@/mockdata/insights/blogcategories';
import Link from 'next/link';

export const Insights = () => {
  return (
    <Layout mainClass='insightspage'>
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
                defaultValue="blog"
              />
            </div>
            <SortFilter />
          </div>
          <div className="row g-0 custom-space">
            {
              blogs.map((blog) => (
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <BlogCard
                    id={blog.id}
                    title={blog.title}
                    date={blog.date}
                    image={blog.image}
                    slug={blog.slug}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* Insights Section Start */}

      {/* Form CTA Section Start */}
      <FormCta />
      {/* Form CTA Section End */}
    </Layout>
  );
}

export default Insights;