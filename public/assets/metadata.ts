import type { Metadata } from "next";
import faviconIco from "./favicon/favicon.ico";
import favicon16x16 from "./favicon/favicon-16x16.png";
import favicon32x32 from "./favicon/favicon-32x32.png";

const assetUrl = (value: string | { src: string }) =>
  typeof value === "string" ? value : value.src;

export const inclusaAppIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: assetUrl(faviconIco), sizes: "any", type: "image/x-icon" },
    {
      url: assetUrl(favicon16x16),
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: assetUrl(favicon32x32),
      sizes: "32x32",
      type: "image/png",
    },
  ],
};

export function createAppMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    icons: inclusaAppIcons,
  };
}
