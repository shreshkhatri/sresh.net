"use client";
import React, { useState } from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Link from "next/link";
import { PATH_TO_ROOT } from "@/app/lib/assets/data/data";
import ModeToggler from "./ModeToggler";
import { CapitalizeWords } from "@/app/lib/assets/utilityFunctions";
import {
  MenusProps,
  typeSelectedMenuIndex,
  setSelectedMenuIndex,
} from "@/app/lib/assets/types/types";
type Options = {
  initialActiveIndex: null | number;
  vertical: boolean;
  handlers?: {
    onKeyDown: (
      event: React.KeyboardEvent<HTMLAnchorElement>,
      fns: {
        setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
      }
    ) => void;
  };
};

const useRovingIndex = (options?: Options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    initialActiveIndex!
  );
  const targetRefs = React.useRef<Array<HTMLAnchorElement>>([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex! + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex! - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index: number) => ({
    ref: (ref: HTMLAnchorElement) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (Number.isInteger(activeIndex)) {
        if (e.key === (vertical ? "ArrowDown" : "ArrowRight")) {
          focusNext();
        }
        if (e.key === (vertical ? "ArrowUp" : "ArrowLeft")) {
          focusPrevious();
        }
        handlers.onKeyDown?.(e, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};

export default function TopNavBar({
  menus,
  selectedMenuIndex,
  setSelectedMenuIndex,
}: {
  menus: MenusProps[];
  selectedMenuIndex: number;
  setSelectedMenuIndex: setSelectedMenuIndex;
}) {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        minHeight: 20,
        width: "100%",
      }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "flex-end",
          width: "inherit",
          height: "inherit",
          "--List-radius": "8px",
          "--List-gap": "8px",
          "--ListItem-gap": "0px",
        }}
      >
        {menus.map((menu, index) => {
          return (
            <ListItem key={index} role="none">
              <Link
                style={{ textDecoration: "none" }}
                href={
                  PATH_TO_ROOT.includes(menu.text.toLocaleLowerCase())
                    ? "/"
                    : `/${menu.text.toLocaleLowerCase()}`
                }
                onClick={() => setSelectedMenuIndex(index)}
              >
                <ListItemButton
                  role="menuitem"
                  {...getTargetProps(index)}
                  sx={{ fontWeight: "bold" }}
                  selected={index === selectedMenuIndex ? true : false}
                >
                  <ListItemDecorator>{menu.icon}</ListItemDecorator>
                  {CapitalizeWords(menu.text)}
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
        <ListItem>
          <ModeToggler />
        </ListItem>
      </List>
    </Box>
  );
}
