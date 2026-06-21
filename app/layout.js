import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SITE_URL = "https://learn.emonkhan.me";
const DESCRIPTION =
  "Emon Khan-er personal dev notes — JavaScript, TypeScript, React, Next.js, Firebase, PHP, React Native ar reusable AI prompt library. Bangla + English mixed.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Emon Khan — Dev Notes & Prompt Library",
  description: DESCRIPTION,
  authors: [{ name: "Emon Khan" }],
  alternates: { canonical: "/" },
  verification: {
    google: "1PKMQUxS_6PMuHZnIHfrT5UxPi6n3UzGvEvb4Lhr6I0",
  },
  openGraph: {
    type: "website",
    siteName: "Emon Khan Notes",
    url: SITE_URL,
    title: "Emon Khan — Dev Notes & Prompt Library",
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Emon Khan — Dev Notes & Prompt Library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emon Khan — Dev Notes & Prompt Library",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: "#0a0f1e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
