import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  transpilePackages: ["@inclusaai/ui", "@inclusaai/design-tokens"],
};

export default nextConfig;
