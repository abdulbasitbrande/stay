import { AmenitiesBlockProps } from "@/types/amenitiesblock";

export default function PropertyAmenitiesBlock({
  amenities,
}: AmenitiesBlockProps) {
  return (
    <div className="amenities-block data-block">
      <h5 className="text-uppercase fw-bold">Amenities</h5>

      <div className="amenities-list">
        {amenities.map((item, index) => (
          <div key={index} className="amenitiy-block">
            <div className="ico">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="22"
                viewBox="0 0 37 22"
                fill="none"
              >
                <path
                  d="M1 12.6752L7.79507 20.4586L24.7827 1"
                  stroke="#757575"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.5934 1.13513L17.0608 20.5937L16.1348 19.3776"
                  stroke="#757575"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="title">{item.title}</div>
            {item.description && <div className="desc">{item.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
