"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Box } from "@mui/joy";
import MobileFriendlyDrawer from "@/app/UI/components/MobileFriendlyDrawerMobileFriendlyDrawer";
import TopNavBar from "@/app/UI/components/TopNavBar";
import { MenusProps } from "@/app/lib/assets/types/types";

export default function MainMenuBars({ menus }: MenusProps) {
  const urlPartArray = usePathname().toLowerCase().split("/");

  const menuName: string =
    urlPartArray[1] == "" ? "home" : urlPartArray[1].toLocaleLowerCase();

  const menuIndex: number =
    menuName == "home"
      ? 0
      : menus.findIndex((m) => m.toLowerCase() == menuName);

  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(menuIndex);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <MobileFriendlyDrawer
        menus={menus}
        selectedMenuIndex={selectedMenuIndex}
        setSelectedMenuIndex={setSelectedMenuIndex}
      />
      <TopNavBar
        menus={menus}
        selectedMenuIndex={selectedMenuIndex}
        setSelectedMenuIndex={setSelectedMenuIndex}
      />
    </Box>
  );
}
