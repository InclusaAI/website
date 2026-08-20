import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@inclusaai/ui",
    "@inclusaai/design-tokens",
    "@repo/assets",
  ],
  turbopack: {
    root: path.resolve(__dirname, ".."),
  },
};

export default nextConfig;
