'use client';
import Link from "next/link";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Not Found",
};

export default function NotFoundError() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
        minHeight: "80vh",
      }}
    >
      <Typography color="warning" textAlign={"center"} level="title-md">
        Not Found !
      </Typography>
      <Typography color="warning" textAlign={"center"} level="body-sm" sx={{p:5}}>
        Could not find requested resource
      </Typography>

      <Link href="/" style={{color:'GrayText'}}>Go to Home</Link>
    
    </Box>
  );
}
