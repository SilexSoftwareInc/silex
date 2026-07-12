import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Silex Software Inc",
    short_name: "Silex",
    description: "Enterprise-grade software. Built right.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [{ src: "/icon", sizes: "any", type: "image/svg+xml" }],
  };
}
