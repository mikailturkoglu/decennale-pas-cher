import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — assurance décennale BTP`,
    short_name: "DécennaleBTP",
    description: siteConfig.shortDescription,
    lang: siteConfig.language,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0b1f33",
    icons: [
      {
        src: "/icon/",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
