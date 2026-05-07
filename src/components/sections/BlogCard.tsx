import Link from "next/link";
import { blogcard } from "@/types/blogcard";

interface Props {
  data: blogcard;
  hasCategory: boolean;
}

const BlogCard = ({ data, hasCategory }: Props) => {
      if (!data) return null; // ✅ prevent crash
  return (
    <Link className="mainbox d-block" href={`/insights/${data.slug}`}>
      <div className="imgbox">
        <img className="fit-img" src={data.image} alt={data.title} />
      </div>

      <div className="contentbox">
        <div className="meta-wrapper">
          <span className="blog-date">{data.date}</span>

          {hasCategory && (
            <>
              {" "}
              - <span className="blog-cat text-uppercase">{data.category}</span>
            </>
          )}
        </div>

        <h4 className="text-uppercase blog-title">{data.title}</h4>

        <span className="arrow-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
          >
            <path
              d="M1.00032 10.0085H21.0192M21.0192 10.0085L12.0107 1.00003M21.0192 10.0085L12.0107 19.017"
              stroke="#2E2E2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;