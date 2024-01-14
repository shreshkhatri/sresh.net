import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3 }}>
      <Typography level="body-xs" textAlign="center">
        Developed by Suresh  © sresh.net {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
