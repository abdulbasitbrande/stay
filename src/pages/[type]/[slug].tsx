import { useRouter } from "next/router";
import { properties } from "@/mockdata/properties";
import Layout from "@/components/layout/Layout";
import Gallery from "@/components/Gallery";
import PropertyInfoBlock from "@/components/InfoBlock";

export default function DetailPage() {
  const { query } = useRouter();

  const property = properties.find(
    (p) => p.projectData.projectCard.slug === query.slug,
  );

  if (!property) return <div>Loading...</div>;

  const projectCard = property.projectData.projectCard;

  return (
    <Layout>
      <div className="project-detail pt-5">
        <Gallery galleryItem={property.projectData.gallery} />

        <div className="container project-data">
          <div className="row">
            <div className="col-md-8 project-info">
              <PropertyInfoBlock
                location={projectCard.location}
                price={projectCard.price}
                title={projectCard.title}
                tags={projectCard.tags}
              />
            </div>

            <div className="col-md-4 project-sidebar ps-3 ps-lg-5"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
