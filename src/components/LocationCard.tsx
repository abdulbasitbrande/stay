import React from "react";
import { LocationCardProps } from "@/types/locationcard";
import RichTextRenderer from "@/components/RichTextRenderer";
import Link from "next/link";

export default function LocationCard({
  id,
  title,
  description,
  buttonLink,
  imageSrc,
}: LocationCardProps) {
  return (
    <div className="location-card">
      <div className="card-face-1">
        <img
          className="featured-img"
          src={
            imageSrc && imageSrc.trim() !== ""
              ? imageSrc
              : "/assets/images/dummy.jpg"
          }
          alt={title}
        />

        <img
          className="arrow-tilt"
          src="/assets/images/arrow-tilt.svg"
          alt="Arrow"
        />

        <h4 className="text-white">{title}</h4>
      </div>

      <div className="card-face-2">
        <h4 className="text-white">{title}</h4>

        <RichTextRenderer content={description} />

        <Link className="mt-4" href={buttonLink}>
          <img
            className="arrow-tilt2"
            src="/assets/images/arrow-tilt.svg"
            alt="Arrow"
          />
        </Link>
      </div>
    </div>
  );
}