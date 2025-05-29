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
<<<<<<< HEAD
    template: "%s | Suresh Web",
    default: "Suresh | Web",
    absolute: "Home | Suresh - Web ",
  },
  description:
    "Suresh Khatri is an application solution architect,  JavaScript Developer, Moodle developer, Python Developer. Suresh holds degree in Bsc Computer Science and MSc Data Science. Suresh works at London South Bank University.",
=======
    template: "%s | Suresh WebApp",
    default: "Suresh | WebApp",
    absolute: "Home | Suresh Website",
  },
  description:
    "A personal website for Suresh Khatri. Suresh Khatri is an application solution architect,  JavaScript Developer, Moodle developer, Python Developer. Suresh holds degree in Bsc Computer Science and MSc Data Science. Suresh works at London South Bank University.",
>>>>>>> 9a9c7db54db5f77950c393a55c69e4b81dd895d3
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
