import { useState, Fragment } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Sheet from "@mui/joy/Sheet";
import Switch from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";
import { cookiePolicyProps } from "@/app/lib/assets/types/types";

export default function CookiePolicy({
  showCookiePortal,
  setShowCookiePortal,
  reportCookieSelectionOptions,
}: cookiePolicyProps) {
  const [acceptEssentialCookie, setAcceptEssentialCookie] = useState(false);
  const [acceptFunctionalCookie, setAcceptFunctionalCookie] = useState(false);
  return (
    <Drawer
      anchor="bottom"
      size="md"
      variant="plain"
      open={showCookiePortal}
      onClose={(event: object, reason: string) => {
        if (reason === "closeClick") {

          reportCookieSelectionOptions({
            essentialCookie: acceptEssentialCookie,
            functionalCookie: acceptFunctionalCookie,
          });

          setShowCookiePortal(false);
        }
      }}
      slotProps={{
        content: {
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            padding: 3,
          },
        },
      }}
      disableEscapeKeyDown={true}
      disableScrollLock={true}
    >
      <Sheet
        sx={{
          borderRadius: "md",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
          overflow: "auto",
        }}
      >
        <DialogTitle>Cookie & Privacy Policy</DialogTitle>
        <ModalClose />
        <Divider sx={{ mt: "auto" }} />
        <DialogContent sx={{ gap: 2 }}>
          <Typography level="title-md" fontWeight="bold" sx={{ mt: 2 }}>
            Cookie options
          </Typography>
          <FormControl orientation="horizontal">
            <Box sx={{ flex: 1, pr: 1 }}>
              <FormLabel sx={{ typography: "title-sm" }}>
                Essential Cookies
              </FormLabel>
              <FormHelperText sx={{ typography: "body-sm" }}>
                These vital cookies are necessary for the site to function
                securely and reliably. Although you can configure your browser
                settings, some site features may be affected if you choose to
                block or receive alerts about these cookies.
              </FormHelperText>
            </Box>
            <Switch
              checked={acceptEssentialCookie}
              color={acceptEssentialCookie ? "success" : "neutral"}
              onChange={(event) =>
                setAcceptEssentialCookie(event.target.checked)
              }
            />
          </FormControl>

          <FormControl orientation="horizontal">
            <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
              <FormLabel sx={{ typography: "title-sm" }}>
                Functional Cookies
              </FormLabel>
              <FormHelperText sx={{ typography: "body-sm" }}>
                These cookies enhance website functionality and personalization,
                either set by us or third-party providers on our pages. If you
                &apos; permit these cookies, some or all of these services may
                not operate effectively.
              </FormHelperText>
            </Box>
            <Switch
              checked={acceptFunctionalCookie}
              color={acceptFunctionalCookie ? "success" : "neutral"}
              onChange={(event) =>
                setAcceptFunctionalCookie(event.target.checked)
              }
            />
          </FormControl>
        </DialogContent>
      </Sheet>
    </Drawer>
  );
}
