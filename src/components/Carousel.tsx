"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ReactNode, useEffect, useState, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ---------------- TYPES ---------------- */

type Device = "mobile" | "tablet" | "desktop";

type ResponsiveValue = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

type EnabledValue = {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
};

type GridValue = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

type LimitValue = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;

  slidesPerView?: ResponsiveValue;
  gridCols?: GridValue;
  limitItems?: LimitValue;

  enabled?: EnabledValue;

  spaceBetween?: number;
  loop?: boolean;
  pagination?: boolean;
};

/* ---------------- COMPONENT ---------------- */

export default function Carousel<T>({
  items,
  renderItem,
  slidesPerView,
  gridCols,
  limitItems,
  enabled,
  spaceBetween = 40,
  loop = true,
  pagination = false,
}: Props<T>) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  /* ---------------- REAL DEVICE (MATCHMEDIA) ---------------- */

  const [device, setDevice] = useState<Device>("mobile");

  useEffect(() => {
    const getDevice = () => {
      if (window.matchMedia("(min-width: 992px)").matches) {
        return "desktop";
      }
      if (window.matchMedia("(min-width: 576px)").matches) {
        return "tablet";
      }
      return "mobile";
    };

    const update = () => setDevice(getDevice());

    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------------- DEFAULTS ---------------- */

  const spv = {
    mobile: slidesPerView?.mobile ?? 1,
    tablet: slidesPerView?.tablet ?? 2,
    desktop: slidesPerView?.desktop ?? 3,
  };

  const cols = {
    mobile: gridCols?.mobile ?? 1,
    tablet: gridCols?.tablet ?? 2,
    desktop: gridCols?.desktop ?? 3,
  };

  const isEnabled = {
    mobile: enabled?.mobile ?? true,
    tablet: enabled?.tablet ?? true,
    desktop: enabled?.desktop ?? true,
  };

  /* ---------------- LIMIT FIX ---------------- */

  const limitCount = limitItems?.[device];

  const visibleItems =
    limitCount !== undefined ? items.slice(0, limitCount) : items;

  /* ---------------- SWITCH ---------------- */

  const isSwiper = isEnabled[device];

  /* ---------------- GRID ---------------- */

  const GridView = () => (
    <div className="row g-4">
      {visibleItems.map((item, i) => (
        <div
          key={i}
          className={`col-12 col-md-${Math.floor(12 / cols[device])}`}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );

  /* ---------------- SWIPER ---------------- */

  const SwiperView = () => (
    <div className="position-relative">
      <button ref={prevRef} className="swiper-nav swiper-nav-left">
        <ArrowLeft />
      </button>

      <button ref={nextRef} className="swiper-nav swiper-nav-right">
        <ArrowRight />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        loop={loop}
        slidesPerView={spv.mobile}
        breakpoints={{
          576: { slidesPerView: spv.tablet },
          992: { slidesPerView: spv.desktop },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={pagination ? { clickable: true } : false}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation = {
              ...(swiper.params.navigation || {}),
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }
        }}
      >
        {visibleItems.map((item, i) => (
          <SwiperSlide key={i}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return isSwiper ? <SwiperView /> : <GridView />;
}

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
