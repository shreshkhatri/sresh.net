import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
};

export default function Experiences() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ minHeight: "70vh" }}
    >
      <Typography textAlign={"center"}>
        {" "}
        Experiences Page Under construction
      </Typography>
    </Box>
  );
}
