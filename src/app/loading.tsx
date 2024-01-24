"use client";
import React, { useEffect } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { ImSpinner9 } from "react-icons/im";
import { SxProps } from "@mui/joy/styles/types";
import { useColorScheme } from "@mui/joy/styles";

const sx: SxProps = {
  fontSize: {
    xs: "3rem",
    sm: "4rem",
    md: "5rem",
  },
};

export default function Loader() {
  const { mode } = useColorScheme();
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: mode == "light" ? "white" : "#030D1E",
      }}
    >
      <Typography sx={{ ...sx, color: "lightgreen" }} textAlign={"center"}>
        <ImSpinner9 className="loading-icon" />
      </Typography>
      <br />
      <Typography textAlign={"center"} level="title-md">
        Loading ...
      </Typography>
    </Box>
  );
}
