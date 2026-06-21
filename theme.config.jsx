import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const SITE_URL = "https://learn.emonkhan.me";

function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // before mount, render light logo to avoid hydration mismatch
  const src =
    mounted && resolvedTheme === "dark"
      ? "/images/emonkhan.me-dark.png"
      : "/images/emonkhan.me.png";

  return <Image src={src} width={220} height={100} alt="Logo" priority />;
}

const themeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/codersemon/notesdoc",
  },
  backgroundColor: {
    dark: "10, 15, 30",
    light: "255, 255, 255",
  },
  color: {
    hue: { dark: 250, light: 250 },
    saturation: { dark: 85, light: 85 },
  },
  footer: {
    content: "Develop by Emon Khan",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  docsRepositoryBase: "https://github.com/codersemon/notesdoc/tree/main",

  // ---- SEO ----
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath === "/" ? "Emon Khan — Dev Notes & Prompts" : "%s – Emon Khan Notes",
    };
  },
  head: function Head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title } = useConfig();

    const url =
      SITE_URL + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const canonical = url.split("?")[0].split("#")[0];

    const description =
      frontMatter.description ||
      "Emon Khan-er personal dev notes — JavaScript, TypeScript, React, Next.js, Firebase, PHP, React Native ar reusable AI prompt library. Bangla + English mixed.";
    const pageTitle = title ? `${title} – Emon Khan Notes` : "Emon Khan — Dev Notes & Prompts";
    const ogImage = frontMatter.image
      ? frontMatter.image.startsWith("http")
        ? frontMatter.image
        : `${SITE_URL}${frontMatter.image}`
      : `${SITE_URL}/og.png`;

    return (
      <>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Emon Khan" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emon Khan Notes" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Emon Khan — Dev Notes & Prompt Library" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0f1e" />
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  },
};
export default themeConfig;
