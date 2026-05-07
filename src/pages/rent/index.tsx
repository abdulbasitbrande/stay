import Layout from "@/components/layout/Layout";
import PropertyPage from "@/components/property/PropertyPage";

export default function RentPage() {
  return (
    <Layout mainClass="buypage">
      <PropertyPage purpose="rent" />;
    </Layout>
  );
}
