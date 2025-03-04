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
    absolute: "Home | Suresh Website",
  },
  description:
    "A personal website for Suresh Khatri. Suresh Khatri is an application solution architect,  JavaScript Developer, Moodle developer, Python Developer. Suresh holds degree in Bsc Computer Science and MSc Data Science. Suresh works at London South Bank University.",
  generator: "NextJS application",
  applicationName: " Suresh personal website",
  authors: [{ name: "suresh khatri" }],
  creator: "Suresh khatri",
  publisher: "suresh khatri",
  keywords: [
    "suresh khatri Moodle Developer",
    "suresh full stack developer",
    "suresh khatri JS developer",
    "suresh khatri portfolio website",
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
