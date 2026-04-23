type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;

  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };

  gridCols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };

  enabled?: {
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  };

  spaceBetween?: number;
  loop?: boolean;
  pagination?: boolean;
};
