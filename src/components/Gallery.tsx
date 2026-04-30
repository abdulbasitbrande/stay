"use client";

import { useEffect, useRef } from "react";
import lightGallery from "lightgallery";

// plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import Link from "next/link";

import { GalleryProp } from "@/types/gallery";

export default function Gallery({ galleryItem }: GalleryProp) {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const instance = lightGallery(galleryRef.current, {
      selector: ".g-img",
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="lightgallery-sec" id="lightgallery" ref={galleryRef}>
      <div className="container">
        <div className="lightgallery-wrapper">
          <div className="row">
            {/* Main Image */}
            {galleryItem.slice(0, 1).map((item, index) => (
              <div
                key={index}
                className="col-md-8 gallery-image"
                data-lg-size="1400-933"
                data-src={item.src}
              >
                <a className="g-img" href={item.src}>
                  <img src={item.src} alt="" height={565} width={500} />
                </a>
              </div>
            ))}

            {/* Small Images */}
            <div className="col-md-4 d-flex flex-row flex-md-column gap-3 mt-5 mt-md-0">
              {galleryItem.slice(1, 3).map((item, index) => (
                <div
                  key={index}
                  className="gallery-image"
                  data-lg-size="1400-933"
                  data-src={item}
                >
                  <a className="g-img" href={item.src}>
                    <img src={item.src} alt="" height={565} width={500} />
                  </a>
                </div>
              ))}
            </div>

            {/* Hidden Images */}
            <div className="hidden-images">
              {galleryItem.slice(3).map((item, index) => (
                <a
                  key={index}
                  className="g-img"
                  href={item.src}
                  data-src={item.src}
                >
                  <img src={item.src} alt="" style={{ display: "none" }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
