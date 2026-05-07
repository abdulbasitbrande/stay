import { Offplanproperties } from "@/types/offplanproperties";
import Link from "next/link";

export default function OffplanProperties({
  title,
  image,
  tags,
  location,
  slug,
}: Offplanproperties) {
  return (
    <Link href={`/property/${slug}`}>
      <div className="offplane-card">
        <div className="image-wrapper position-relative mb-4">
          <img src={image} alt="" />
          <div className="d-flex flex-wrap gap-2 mb-3 tags">
            {(tags ?? []).map((tag, i) => (
              <span key={i} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prop-content">
          <h5 className="text-uppercase">{title}</h5>

          {location && (
            <p className="small text-muted mb-3">
              <img src="assets/images/marker.svg" className="me-2" />
              {location}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
