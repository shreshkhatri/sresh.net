'use client';
import Experiencecs from '@/components/Experiencecs';
import Introduction from '@/components/Introduction';
import Jumbotorn from '@/components/Jumbotorn';
import MobileFriendlyDrawer from '@/components/MobileFriendlyDrawerMobileFriendlyDrawer';
import TopNavBar from '@/components/TopNavBar';
import { Typography } from '@mui/joy';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const menus = ['Home', 'About', 'Contact'];
  return (
    <>
      <MobileFriendlyDrawer open={open} setOpen={setOpen} menus={menus} />
      <TopNavBar menus={menus} />
      <Jumbotorn />
      <Introduction />
      <Experiencecs />
      
    </>
  )
}
