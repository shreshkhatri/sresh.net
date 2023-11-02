'use client';
import MobileFriendlyDrawer from '@/components/MobileFriendlyDrawerMobileFriendlyDrawer';
import TopNavBar from '@/components/TopNavBar';
import { Typography } from '@mui/joy';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const menus=['Home','About','Contact'];
  return (
    <>
      <MobileFriendlyDrawer open={open} setOpen={setOpen} menus={menus} />
      <TopNavBar menus={menus}/>
      <Typography>
        My page
      </Typography>
    </>
  )
}
