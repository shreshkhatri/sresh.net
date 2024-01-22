
import { Box } from "@mui/joy";
import MobileFriendlyDrawer from "@/app/UI/components/MobileFriendlyDrawerMobileFriendlyDrawer";
import TopNavBar from "@/app/UI/components/TopNavBar";
import { PageTemplateProps } from "@/app/lib/assets/types/types";

export default async function MainMenuBars(menuBarProps:PageTemplateProps) {

  return (
      <Box display={'flex'} flexDirection={'row'}>
      <MobileFriendlyDrawer {...menuBarProps} />
      <TopNavBar {...menuBarProps} />
      </Box>
  );
}
