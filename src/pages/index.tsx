import HeroSection from "@/components/sections/home/Hero";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout mainClass="homepage">
      <HeroSection />
    </Layout>
  );
}
