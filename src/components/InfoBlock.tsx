import React from "react";
import { InfoBlockProps } from "@/types/infoblock";

export default function PropertyInfoBlock({
  title,
  price,
  location,
  tags,
}: InfoBlockProps) {
  return (
    <div className="info-block data-block">
      {/* Price */}
      <h3 className="fw-bold">
        {new Intl.NumberFormat("en-AE", {
          style: "currency",
          currency: "AED",
          maximumFractionDigits: 0,
        }).format(price)}
      </h3>

      {/* Title */}
      <h4>{title}</h4>

      {/* Location */}
      <p className="small text-muted mb-3 d-flex align-items-center">
        <span className="me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
          >
            <path
              d="M5.28701 13.6784C5.68001 14.0722 6.31999 14.0722 6.71299 13.6784C9.20588 11.1802 11.5 8.86145 11.5 6.05789C11.5 2.98835 9.03757 0.5 6 0.5C2.96244 0.5 0.5 2.98835 0.5 6.05789C0.5 8.86145 2.79412 11.1802 5.28701 13.6784Z"
              stroke="#757575"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99992 8.60506C7.4388 8.60506 8.60518 7.43868 8.60518 5.99979C8.60518 4.56095 7.4388 3.39453 5.99992 3.39453C4.56103 3.39453 3.39465 4.56095 3.39465 5.99979C3.39465 7.43868 4.56103 8.60506 5.99992 8.60506Z"
              stroke="#757575"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {location}
      </p>

      {/* Tags */}
      <div className="d-flex flex-wrap gap-2 mb-3 tags-wrapper">
        {tags?.map((tag: string, i: number) => (
          <span key={i} className="badge">
            {tag}
          </span>
        ))}
      </div>

      <hr />

      {/* Description */}
      <h5 className="text-uppercase fw-bold">Description</h5>
      <div className="desc text-justify">
        <p>
          Rimal 3 is an impressive 40-storey residential tower situated in the
          lively Jumeirah Beach Residence (JBR), Dubai. As part of the extensive
          Rimal complex, this building features a diverse range of living
          options, including studio, 1, 2, and 3-bedroom apartments, all
          boasting stunning views of the picturesque boulevards and the Arabian
          Gulf.
          <br />
          <br />
          With its prime location, residents enjoy seamless access to the beach,
          an array of shopping options, fine dining, and the vibrant nightlife
          that JBR has to offer. Embrace a luxurious lifestyle in this
          exceptional community, where every detail is crafted for your ultimate
          comfort and enjoyment.
        </p>
      </div>
    </div>
  );
}
