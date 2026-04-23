import Link from 'next/link';
import { blogcard } from '@/types/blogcard';

const BlogCard = ({ title, date, image, slug, hasCategory }: blogcard) => {
    return (
        <Link className='mainbox d-block' href={`/insights/${slug}`}>
            <div className="imgbox">
                <img className='fit-img' src={image} alt="" />
            </div>
            <div className="contentbox">
                <div className="meta-wrapper">
                    <span className='blog-date '>{date}</span>
                    {hasCategory && <> - <span className='blog-cat text-uppercase'>Blogs</span></>}
                </div>
                <h4 className='text-uppercase blog-title'>{title}</h4>
                <span className='arrow-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                        <path d="M1.00032 10.0085H21.0192M21.0192 10.0085L12.0107 1.00003M21.0192 10.0085L12.0107 19.017" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}

export default BlogCard;