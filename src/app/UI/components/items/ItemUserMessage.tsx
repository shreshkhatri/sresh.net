"use client";
import { Box, Typography, Input, Avatar } from "@mui/joy";
import { FaRegCircleUser } from "react-icons/fa6";
import { PropUserMessage } from "@/app/lib/assets/types/types";
import Slide from 'react-reveal/Slide';

export default function ItemUserMessage({ message }: PropUserMessage) {
  return (
    <Slide bottom>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        alignItems:'center'
      }}
    >
      <Typography
        level="body-sm"
        textAlign={"right"}
        variant="outlined"
        sx={{ flexGrow: 1, marginLeft: "4rem", borderRadius: 10,p:1 }}
      >
        {message}
      </Typography>
      <Avatar size="lg" variant="outlined">
        <FaRegCircleUser />
      </Avatar>
    </Box>
    </Slide>
  );
}
