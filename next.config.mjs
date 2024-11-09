/** @type {import('next').NextConfig} */
import nextra from "nextra";

const nextConfig = {
  reactStrictMode: process.env.CLEAR_CACHE === "true",
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
