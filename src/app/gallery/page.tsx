import PageTemplate from "../UI/components/PageTemplate";
import { Metadata } from "next";
import { Box } from "@mui/joy";
import Image from "next/image";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Experiences() {
  return (
    <PageTemplate>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Card variant="plain">
          <CardOverflow>
            {/* Removed unnecessary Box wrapper */}
            <div
              style={{
                display:'inline-flex',
                flexDirection:'row',
                width: "100%",
                minHeight: "200px",
                position: "relative",
              }}
            >
              <AspectRatio
                sx={{
                  zIndex: 0,
                }}
              >
                <Image
                  src={"/images/theme.jpeg"}
                  alt="suresh"
                  width={"200"}
                  height={"200"}
                  style={{
                    border: "3px solid #EEEEEE",
                    borderRadius: "3px",
                  }}
                />
              </AspectRatio>
              <AspectRatio
                sx={{
                  zIndex: 1,
                }}
              >
                <Image
                  src={"/images/theme.jpeg"}
                  alt="suresh"
                  width={"200"}
                  height={"200"}
                  style={{
                    border: "3px solid #EEEEEE",
                    borderRadius: "3px",
                  }}
                />
              </AspectRatio>
              <AspectRatio sx={{}}>
                <Image
                  src={"/images/theme.jpeg"}
                  alt="suresh"
                  width={"200"}
                  height={"200"}
                  style={{
                    zIndex: 1,
                    border: "3px solid #EEEEEE",
                    borderRadius: "3px",
                  }}
                />
              </AspectRatio>
            </div>
          </CardOverflow>
          <CardContent sx={{ paddingTop: 3 }}>
            <Typography level="title-md">
              <Link href="#multiple-actions" overlay underline="none">
                Yosemite National Park
              </Link>
            </Typography>
            <Typography level="body-sm">
              <Link href="#multiple-actions">California</Link>
            </Typography>
          </CardContent>
          <CardOverflow variant="soft">
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Typography level="body-xs">6.3k views</Typography>
              <Divider orientation="vertical" />
              <Typography level="body-xs">1 hour ago</Typography>
            </CardContent>
          </CardOverflow>
        </Card>
      </Box>
    </PageTemplate>
  );
}
