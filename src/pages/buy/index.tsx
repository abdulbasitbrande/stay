import Layout from "@/components/layout/Layout";
import PropertyPage from "@/components/property/PropertyPage";

export default function BuyPage() {
  return (
    <Layout mainClass="buypage">
      <div className="container project-section  sec-padding">
      <PropertyPage purpose="buy" />
      </div>
    </Layout>
  );
}
