export const SITE_URL = "https://www.heiwa.fun";

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Heiwa",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/screenshots/app-icon.png`, width: 1024, height: 1024 },
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Heiwa",
  description: "Personal soundscapes for sleep, focus, reading, and relaxation.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

export function breadcrumbsJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE_URL}${item.path}` })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const graph = Array.isArray(data) ? data : [data];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}
