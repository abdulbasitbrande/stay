import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/property";

interface Props {
  data: Property[];
}

export default function PropertyList({ data }: Props) {
  return (
    <div className="row">
      {data.map((item) => (
        <PropertyCard
          key={item.id}
          property={{
            ...item,
            variant: "small",
          }}
        />
      ))}
    </div>
  );
}