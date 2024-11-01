/** @type {import('next').NextConfig} */
import nextra from "nextra";

const nextConfig = {
  images: {
    remotePatterns: [],
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
