import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Heiwa Sleep Sounds",
    short_name: "Heiwa",
    description: "Create personal soundscapes for sleep, focus, and relaxation.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3e8",
    theme_color: "#168f70",
    icons: [
      {
        src: "/screenshots/app-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
