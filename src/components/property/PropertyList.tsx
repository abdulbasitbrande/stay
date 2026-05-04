import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/property";
import { useSelector } from "react-redux";

interface Props {
  data: Property[];
}

export default function PropertyList({ data }: Props) {
  const { viewMode } = useSelector((s: any) => s.property);

  return (
    <div className="listing">
      <div className="listing-wrapper">
        <div className="container project-section">
          <div className="row">
            {data.map((item) => (
              <div
                key={item.id}
                className={`mt-4 ${viewMode === "grid" ? "col-12 col-md-6 col-lg-4" : "col-12"}`}
              >
                {viewMode === "grid" ? (
                  <PropertyCard
                    property={{
                      ...item,
                      variant: "small-card",
                    }}
                    cusClass="listing-cards h-100"
                  />
                ) : (
                  
                    <PropertyCard
                      property={{
                        ...item,
                        variant: "large-card",
                      }}
                      cusClass="listing-cards h-100"
                    />
             
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
