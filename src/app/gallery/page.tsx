import PageTemplate from "../UI/components/PageTemplate";
import { Metadata } from "next";
import { Box, Typography } from "@mui/joy";
import * as React from "react";
import { PageTemplateProps } from "../lib/assets/types/types";
import { MENU_ITEMS } from "../lib/assets/data/data";

export const metadata: Metadata = {
  title: "Gallery",
};

const pageTemplateProps: PageTemplateProps = {
  menus:MENU_ITEMS,
  selectedMenu:'gallery'
};

export default function Experiences() {
  return (
    <PageTemplate pageTemplateProps={pageTemplateProps}>
      <Box sx={{ display: "flex", minHeight:'80vh' ,justifyContent:'center',alignItems:'center'}}>
        <Typography textAlign={'center'}>Contents coming up ... 🙂	</Typography>
      </Box>
    </PageTemplate>
  );
}
