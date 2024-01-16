
import { Box } from "@mui/joy";
import { MENU_ITEMS } from "@/app/lib/assets/data/data";
import MobileFriendlyDrawer from "@/app/UI/components/MobileFriendlyDrawerMobileFriendlyDrawer";
import TopNavBar from "@/app/UI/components/TopNavBar";

export default async function MainMenuBars() {

  return (
      <Box display={'flex'} flexDirection={'row'}>
      <MobileFriendlyDrawer menus={MENU_ITEMS} />
      <TopNavBar menus={MENU_ITEMS} />
      </Box>
  );
}
