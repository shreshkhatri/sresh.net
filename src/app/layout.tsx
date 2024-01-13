"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import MobileFriendlyDrawer from "@/components/MobileFriendlyDrawerMobileFriendlyDrawer";
import TopNavBar from "@/components/TopNavBar";
import { getInitColorSchemeScript } from "@mui/joy/styles";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import NetworkStatus from "@/components/InternetConnectionStatus";
import { Box } from "@mui/joy";
import CookiePolicy from "@/components/CookiePolicy";
import Cookies from "js-cookie";
import { cookiePreferenceProps } from "./types/types";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [showCookiePortal, setShowCookiePortal] = useState(false);
  const menus = ["Home", "Gallery", "Portfolio", "Contact"];

  const reportCookieSelectionOptions = (
    cookiePreference: cookiePreferenceProps
  ) => {
    cookiePreference.essentialCookie &&
      Cookies.set("essentialCookie", "true", { expires: 365 });
    cookiePreference.functionalCookie &&
      Cookies.set("functionalCookie", "true", { expires: 365 });
  };

  useEffect(() => {
    const essentialCookie = Cookies.get("essentialCookie");

    if (!essentialCookie) {
      setShowCookiePortal(true);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="suesh personal website"
          content="Bio , portfolio, experience and more about suresh"
        />
        <meta name="author" content="suresh khatri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeRegistry>
          {getInitColorSchemeScript()}

          <Box display={"flex"}>
            <MobileFriendlyDrawer open={open} setOpen={setOpen} menus={menus} />
            <TopNavBar menus={menus} />
          </Box>
          {children}
          <CookiePolicy
            showCookiePortal={showCookiePortal}
            setShowCookiePortal={setShowCookiePortal}
            reportCookieSelectionOptions={reportCookieSelectionOptions}
          />
          <Footer />
          <NetworkStatus />
        </ThemeRegistry>
      </body>
    </html>
  );
}
