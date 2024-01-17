"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/joy";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    document.title='Error Occured'
  }, [error]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography textAlign={"center"}>
        {error.message}
      </Typography>
      <br />
      <Button size="md" onClick={reset}>
        Try Reload
      </Button>
    </Box>
  );
}
