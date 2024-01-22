import React,{ReactNode} from "react";
import NetworkStatus from "@/app/UI/components/InternetConnectionStatus";
import { Box } from "@mui/joy";
import CookiePolicy from "@/app/UI/components/CookiePolicy";
import Footer from "@/app/UI/components/Footer";
import { cookies } from "next/headers";
import MainMenuBars from "./MainMenuBars";
import { PageTemplateProps } from "@/app/lib/assets/types/types";

export default function PageTemplate({ pageTemplateProps, children }: { pageTemplateProps: PageTemplateProps, children: ReactNode }) {
  //getting experiences data on server
  const cookieStore = cookies();
  const essentialCookie = cookieStore.get("essentialCookie");
  const functionalCookie = cookieStore.get("functionalCookie");
  
  return (
    <Box display={"flex"} flexDirection={'column'}>
      <MainMenuBars {...pageTemplateProps}/>
      {children}
      {!essentialCookie && <CookiePolicy />}
      <NetworkStatus />
      <Footer />
    </Box>
  );
}