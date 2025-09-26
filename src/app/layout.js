import { Analytics } from "@vercel/analytics/next";

import { Cinzel, Urbanist } from "next/font/google";

import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBox from "@/components/popups/ChatBox";
import FirstLoadPopup from "@/components/popups/FirstLoadPopup";

import "@/styles/globals.css";

const cinzel = Cinzel({ variable: "--font-cinzel-serif", subsets: ["latin"] });

const urbanist = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Adv. Shafak A. Bakali | High Court Lawyer in Pune for Criminal, Civil & Cyber Law",
  description:
    "Get expert legal guidance from Adv. Shafak A. Bakali, High Court Advocate in Pune. Specializing in criminal, civil, cyber law, documentation, and notary services.",
  keywords: [
    "lawyer in Pune",
    "lawyer in Mumbai",
    "lawyer in Nashik",
    "High Court advocate",
    "criminal lawyer Pune",
    "civil litigation Pune",
    "cyber law expert",
    "legal documentation",
    "notary services Pune",
    "Shafak Bakali advocate",
  ],
  metadataBase: new URL("https://www.shafakbakali.com"),
  openGraph: {
    title: "Adv. Shafak A. Bakali | Trusted Legal Counsel in Pune",
    description:
      "Advocate Shafak A. Bakali offers legal expertise in criminal, civil, cyber law, and more. Book a consultation with a High Court lawyer in Pune.",
    url: "https://www.shafakbakali.com",
    siteName: "Adv. Shafak A. Bakali",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Advocate Shafak A. Bakali profile preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adv. Shafak A. Bakali | Legal Expertise You Can Trust",
    description:
      "Connect with Adv. Shafak A. Bakali, High Court Advocate in Pune. Specializing in criminal, civil, and cyber law cases.",
    images: ["/opengraph-image.jpg"],
    creator: "@shafakbakali",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${urbanist.variable}`}>
        <ThemeProvider theme={theme}>
          <FirstLoadPopup />
          <Header />
          {children}
          <Footer />
          <ChatBox />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
