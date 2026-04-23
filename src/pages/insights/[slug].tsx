import Layout from '@/components/layout/Layout'
import FormCta from '@/components/sections/FormCta';
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { useRouter } from 'next/router'
import Carousel from '@/components/Carousel';
import BlogCard from '@/components/sections/BlogCard';
import { blogs } from '@/mockdata/insights/blogcard';
import FormCtaWithImage from '@/components/sections/FormCtaWithImage';

const InsightDetail = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <Layout mainClass='insightdetail'>
            <section className="insight-detail-sec sec-padding --small">
                <div className="container">
                    <div className="sec-title --is-medium has-spacing has-scroll-animation">
                        <h2>Why Dubai’s Off-Plan Market Continues to Attract Global Investors</h2>
                    </div>
                    <div className="main-img-wrapper">
                        <img className='fit-img main-img' src="/assets/images/insight-detail-img.jpg" alt="" />
                    </div>
                    <div className="contentbox">
                        <h3>Why Dubai’s Off-Plan Market Continues to Attract Global Investors</h3>
                        <div className="social-links">
                            <span>Share this on:</span>
                            <ul>
                                <li>
                                    <Link href='#'><img className='social-icon-img' src="/assets/images/share-icon-1.png" alt="" /></Link>
                                </li>
                                <li>
                                    <Link href='#'><img className='social-icon-img' src="/assets/images/share-icon-2.png" alt="" /></Link>
                                </li>
                                <li>
                                    <Link href='#'><img className='social-icon-img' src="/assets/images/share-icon-3.png" alt="" /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <p>Dubai’s real estate market has long been recognized as one of the world’s most dynamic property landscapes. In recent years, off-plan developments have emerged as a particularly attractive investment opportunity, drawing the attention of both regional and international buyers.</p>
                            <p>With competitive pricing, flexible payment plans, and the potential for significant capital appreciation, off-plan properties offer investors a strategic entry point into Dubai’s rapidly evolving skyline.</p>
                            <br />
                            <h3>Understanding Off-Plan Investments</h3>
                            <p>Off-plan properties are units purchased directly from a developer before construction is completed. Investors typically buy at earlier stages of development, allowing them to secure properties at prices that are often lower than completed units. This early access creates an opportunity for buyers to benefit from price appreciation as the project progresses and demand increases.</p>
                            <p>In Dubai, many developers provide attractive payment structures that allow investors to spread payments across the construction period, making off-plan purchases more accessible than traditional property acquisitions.</p>
                            <br />
                            <h3>Why Dubai Remains a Global Investment Hub?</h3>
                            <p>Dubai’s continued investment in infrastructure, tourism, and innovation has positioned the city as a global destination for both lifestyle and business. Strategic government initiatives, investor-friendly regulations, and long-term residency options have further strengthened the city’s appeal.</p>
                            <p>The result is a real estate market that consistently attracts international investors seeking both stable returns and long-term growth.</p>
                            <br />
                            <h3>Data-Driven Investment Decisions!</h3>
                            <p>Modern real estate investment increasingly relies on analytics and market intelligence. Investors today are looking beyond location alone, focusing on performance indicators such as rental yield potential, demand trends, and future infrastructure development.</p>
                            <p>Technology and data-driven insights help identify the most promising opportunities, enabling buyers to make informed decisions in a competitive market.</p>
                            <br />
                            <h3>Looking Ahead...</h3>
                            <p>Dubai’s real estate sector continues to evolve, with new developments shaping the city’s skyline and expanding investment opportunities. Off-plan properties remain a compelling option for those seeking early access to emerging communities and future landmarks.</p>
                            <p>For investors who approach the market strategically and rely on informed guidance, Dubai’s off-plan sector offers a powerful combination of opportunity, growth, and long-term value.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form CTA Section Start */}
            <FormCta />
            {/* Form CTA Section End */}

            {/* Related Section Start */}
            <section className='related-sec insights-sec sec-padding'>
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
                        />
                    </div>
                </div>
            </section>
            {/* Related Section End */} 

            {/* Form CTA With Image Section Start */}
            <FormCtaWithImage />
            {/* Form CTA With Image Section End */}
        </Layout >
    )
}

export default InsightDetail;