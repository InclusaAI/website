import type { Metadata } from "next";
import { logoLandscape } from "./index";

const assetUrl = (value: string | { src: string }) =>
  typeof value === "string" ? value : value.src;

export const inclusaAppIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
};

export function createAppMetadata(
  title: string,
  description: string,
  ogImage: string | { src: string; width?: number; height?: number } = logoLandscape,
): Metadata {
  const imageUrl = assetUrl(ogImage);
  const imageWidth =
    typeof ogImage === "object" && "width" in ogImage && ogImage.width
      ? ogImage.width
      : 1200;
  const imageHeight =
    typeof ogImage === "object" && "height" in ogImage && ogImage.height
      ? ogImage.height
      : 630;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    icons: inclusaAppIcons,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "InclusaAI",
      images: [
        {
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
