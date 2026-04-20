import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout mainClass="homepage">
      <section className="hero">
        <div className="container">
          <h1 className="wow animate__animated">
            Hi There! <span className="wave-hand">👋</span>
          </h1>
        </div>
      </section>
    </Layout>
  );
}
