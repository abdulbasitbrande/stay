import Layout from "@/components/layout/Layout";
import FormCta from "@/components/sections/FormCta";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { useRouter } from "next/router";
import Carousel from "@/components/Carousel";
import BlogCard from "@/components/sections/BlogCard";
import { blogs } from "@/mockdata/insights/blogcard";
import FormCtaWithImage from "@/components/sections/FormCtaWithImage";
import { blogdetail } from "@/mockdata/insights/blogdetail";

const InsightDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout mainClass="insightdetail">
      <section className="insight-detail-sec sec-padding --small">
        <div className="container">
          <div className="sec-title --is-medium has-spacing has-scroll-animation">
            <h2>{blogdetail.title}</h2>
          </div>
          <div className="main-img-wrapper">
            <img
              className="fit-img main-img"
              src={blogdetail.mainImage}
              alt=""
            />
          </div>
          <div className="contentbox">
            <h3>{blogdetail.title}</h3>
            <div className="social-links">
              <span>Share this on:</span>
              <ul>
                <li>
                  <Link href="#">
                    <img
                      className="social-icon-img"
                      src="/assets/images/share-icon-1.png"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img
                      className="social-icon-img"
                      src="/assets/images/share-icon-2.png"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img
                      className="social-icon-img"
                      src="/assets/images/share-icon-3.png"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content">
              <div
                dangerouslySetInnerHTML={{ __html: blogdetail.description }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form CTA Section Start */}
      <FormCta />
      {/* Form CTA Section End */}

      {/* Related Section Start */}
      <section className="related-sec insights-sec sec-padding">
        <div className="container">
          <div className="sec-title --is-medium has-spacing">
            <SectionHeading text="Start Your Real Estate Journey With Us!" />
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

      {/* Form CTA With Image Section Start */}
      <FormCtaWithImage
        formTitle={blogdetail.formTitle}
        formImage={blogdetail.formImage}
      />
      {/* Form CTA With Image Section End */}
    </Layout>
  );
};

export default InsightDetail;
