"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReactNode, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  spaceBetween?: number;
  loop?: boolean;
};

export default function Carousel<T>({
  items,
  renderItem,
  slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  spaceBetween = 40,
  loop = true,
}: CarouselProps<T>) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="position-relative">
      {/* NAVIGATION */}
      <button ref={prevRef} className="swiper-nav swiper-nav-left">
        <ArrowLeft />
      </button>

      <button ref={nextRef} className="swiper-nav swiper-nav-right">
        <ArrowRight />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        loop={loop}
        slidesPerView={slidesPerView.mobile}
        breakpoints={{
          576: { slidesPerView: slidesPerView.tablet },
          992: { slidesPerView: slidesPerView.desktop },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // ✅ SAFE & SSR friendly
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation = {
              ...(swiper.params.navigation || {}),
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* ---------------- ICONS ---------------- */

function ArrowLeft() {
  return (
    <svg width="40" height="21" viewBox="0 0 40 21" fill="none">
      <path
        d="M38.5866 10.0091L0.999997 10.0085M0.999997 10.0085L10.0085 0.999995M0.999997 10.0085L10.0085 19.017"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="40"
      height="21"
      viewBox="0 0 40 21"
      fill="none"
      style={{ transform: "rotate(180deg)" }}
    >
      <path
        d="M38.5866 10.0091L0.999997 10.0085M0.999997 10.0085L10.0085 0.999995M0.999997 10.0085L10.0085 19.017"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
