import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import { Metadata } from "next";
import { getServices } from "../lib/assets/helperFunctions/dataloaders";
import Services from "../UI/components/Services";

export const metadata: Metadata = {
  title: "Services",
};

export default async function Page() {
    
const services = await getServices();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ minHeight: "70vh" }}
    >
      <Typography textAlign={"center"}>
        Services list will be updated soon.
      </Typography>
      <Services services={services} />
    </Box>
  );
}
