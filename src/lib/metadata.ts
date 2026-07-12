import type { Metadata } from "next";

const SITE_NAME = "Silex Software Inc";
const SITE_URL = "https://silex.software";

interface CreateMetadataOptions {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: CreateMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const titled = title ? `${title} | ${SITE_NAME}` : undefined;

  return {
    ...(title ? { title } : {}),
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      ...(titled ? { title: titled } : {}),
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: "/opengraph-image" }],
    },
    twitter: {
      card: "summary_large_image",
      ...(titled ? { title: titled } : {}),
      description,
      images: ["/opengraph-image"],
    },
  };
}
