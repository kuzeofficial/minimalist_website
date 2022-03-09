import { NextSeo } from "next-seo";
interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    url: string;
    title: string;
    description: string;
    images: [
      { url: string; width: number; height: number; alt: string; type: string }
    ];
    site_name: string;
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
  };
}
const SEO = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: SEOProps) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={openGraph}
      twitter={twitter}
    />
  </>
);

export default SEO;
