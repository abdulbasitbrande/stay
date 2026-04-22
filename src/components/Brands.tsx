import { Brands } from "@/types/brands";

export default function BrandsCard({ image }: Brands) {
  return (
    <div className="brand-card-wrapper">
      <img src={image} alt="" />
    </div>
  );
}
