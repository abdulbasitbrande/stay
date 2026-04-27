import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/property";

interface Props {
  data: Property[];
}

export default function PropertyList({ data }: Props) {
  return (
    <div className="listing">
      <div className="listing-wrapper">
        <div className="container project-section">
          <div className="row">
            {data.map((item) => (
              <div className="col-12 mt-4">
                <div className="row">
                  <PropertyCard
                    key={item.id}
                    property={{
                      ...item,
                      variant: "large",
                    }}
                    cusClass="listing-cards"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
