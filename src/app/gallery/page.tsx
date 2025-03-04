import { Metadata } from "next";
import { Box, Typography } from "@mui/joy";
import * as React from "react";
import { MENU_ITEMS } from "../lib/assets/data/data";
import Album from "../UI/components/Album";


export const metadata: Metadata = {
  title: "Gallery",
};


export default function Experiences() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Album />
    </Box>
  );
}
