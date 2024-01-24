import "./globals.css";
import React from "react";
import { Metadata } from "next";
import ThemeRegistry from "@/app/UI/components/ThemeRegistry/ThemeRegistry";
import { inter } from "./UI/components/ThemeRegistry/fonts";
import MainMenuBars from "./UI/components/MainMenuBars";
import ChatUI from "./UI/components/ChatUI";
import { MENU_ITEMS } from "./lib/assets/data/data";
import { cookies } from "next/headers";
import CookiePolicy from "./UI/components/CookiePolicy";
import NetworkStatus from "./UI/components/InternetConnectionStatus";
import Footer from "./UI/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Suresh WebApp",
    default: "Suresh | WebApp",
    absolute: "Home | Suresh WebApp",
  },
  description:
    "A personal website for Suresh Khatri. The web application is designed and built using NextJS and involves uses of numerous other open source JavaScript libraries and resources offered by Vercel and AWS.",
  generator: "NextJS application",
  applicationName: " Suresh personal website",
  authors: [{ name: "suresh khatri" }],
  creator: "Suresh khatri",
  publisher: "suresh khatri",
  keywords: [
    "suresh khatri",
    "suresh full stack developer",
    "JS developer",
    "suresh personal web",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //getting experiences data on server
  const cookieStore = cookies();
  const essentialCookie = cookieStore.get("essentialCookie");
  const functionalCookie = cookieStore.get("functionalCookie");

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeRegistry>
          <MainMenuBars menus={MENU_ITEMS} />
          {children}
          {!essentialCookie && <CookiePolicy />}
          <ChatUI />
          <NetworkStatus />
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
