import NetworkStatus from "@/app/UI/components/InternetConnectionStatus";
import { Box } from "@mui/joy";
import CookiePolicy from "@/app/UI/components/CookiePolicy";
import Footer from "@/app/UI/components/Footer";
import { cookies } from "next/headers";
import MainMenuBars from "./MainMenuBars";

export default function PageTemplate({
    children,
  }: {
    children: React.ReactNode;
  }) {
  //getting experiences data on server
  const cookieStore = cookies();
  const essentialCookie = cookieStore.get("essentialCookie");
  const functionalCookie = cookieStore.get("functionalCookie");

  return (
    <Box display={"flex"} flexDirection={'column'}>
      <MainMenuBars />
      {children}
      {!essentialCookie && <CookiePolicy />}
      <NetworkStatus />
      <Footer />
    </Box>
  );
}
