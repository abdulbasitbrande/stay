export interface BasicSeo {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
}

export interface OpenGraphMeta {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}

export interface TwitterMeta {
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
}

export interface SeoProps {
  basicSeo?: BasicSeo;
  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
}
