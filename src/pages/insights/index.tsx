import Layout from '@/components/layout/Layout';
import SortFilter from '@/components/SortFilter';
import Link from 'next/link';

export const Insights = (props) => {
  return (
    <Layout>
      <section className="insights-sec blog-cards-sec sec-padding --small">
        <div className="container">
          <div className="sec-title --is-medium has-spacing has-scroll-animation">
            <h2 className=''>Expert Perspectives on Dubai’s Property Market & Investment Opportunities</h2>
          </div>
          <div className="tab-links-wrapper d-flex justify-content-between">
            <div className="tab-links">
            </div>
            <SortFilter />
          </div>
          <div className="row g-0 custom-space">
            <div className="col-lg-4">
              <Link className='mainbox d-block' href='#'>
                <div className="imgbox">
                  <img className='fit-img' src="/assets/images/blog-img-1.jpg" alt="" />
                </div>
                <div className="contentbox">
                  <span className='blog-date d-block'>DECEMBER 26, 2024</span>
                  <h4 className='text-uppercase blog-title'>2025, Landmark Year: STAY DXB Achieves New Heights in Dubai’s Market</h4>
                  <span className='arrow-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                      <path d="M1.00032 10.0085H21.0192M21.0192 10.0085L12.0107 1.00003M21.0192 10.0085L12.0107 19.017" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link className='mainbox d-block' href='#'>
                <div className="imgbox">
                  <img className='fit-img' src="/assets/images/blog-img-2.jpg" alt="" />
                </div>
                <div className="contentbox">
                  <span className='blog-date d-block'>DECEMBER 26, 2024</span>
                  <h4 className='text-uppercase blog-title'>2025, Landmark Year: STAY DXB Achieves New Heights in Dubai’s Market</h4>
                  <span className='arrow-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                      <path d="M1.00032 10.0085H21.0192M21.0192 10.0085L12.0107 1.00003M21.0192 10.0085L12.0107 19.017" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Insights;