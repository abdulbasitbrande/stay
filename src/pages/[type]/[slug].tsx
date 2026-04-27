import { useRouter } from "next/router";
import { properties } from "@/mockdata/properties";

export default function DetailPage() {
  const { query } = useRouter();

  const property = properties.find((p) => p.slug === query.slug);

  if (!property) return <div>Loading...</div>;

  return <h1>{property.title}</h1>;
}
