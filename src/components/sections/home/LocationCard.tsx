import React from "react";
import { LocationCardProps } from "@/types/locationcard";
import RichTextRenderer from "@/components/RichTextRenderer";
import Link from "next/link";

export default function LocationCard({
  id,
  title,
  description,
  imageSrc,
}: LocationCardProps) {
  const toTitleCase = (str: string) =>
    str
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const formattedTitle = toTitleCase(title);
  const buyLink = `/buy?search=location:${encodeURIComponent(formattedTitle)}`;

  return (
    <Link href={buyLink} className="location-card">
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


        <div className="mt-4">
          <img
            className="arrow-tilt2"
            src="/assets/images/arrow-tilt1.svg"
            alt="Arrow"
          />
        </div>

      </div>
    </Link>
  );
}