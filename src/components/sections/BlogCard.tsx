import Link from 'next/link';
import { blogcard } from '@/types/blogcard';

const BlogCard = ({ title, date, image, slug }: blogcard) => {
    return (
        <Link className='mainbox d-block' href={slug}>
            <div className="imgbox">
                <img className='fit-img' src={image} alt="" />
            </div>
            <div className="contentbox">
                <span className='blog-date d-block'>{date}</span>
                <h4 className='text-uppercase blog-title'>{title}</h4>
                <span className='arrow-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                        <path d="M1.00032 10.0085H21.0192M21.0192 10.0085L12.0107 1.00003M21.0192 10.0085L12.0107 19.017" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}

export default BlogCard;