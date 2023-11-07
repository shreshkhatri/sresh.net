
'use client';
import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google'
import MobileFriendlyDrawer from '@/components/MobileFriendlyDrawerMobileFriendlyDrawer';
import TopNavBar from '@/components/TopNavBar';
import { getInitColorSchemeScript } from '@mui/joy/styles';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false);
  const menus = ['Home', 'About', 'Contact'];

  return (

    <html lang="en">
      <body>
        <ThemeRegistry>
          {getInitColorSchemeScript()}
          <MobileFriendlyDrawer open={open} setOpen={setOpen} menus={menus} />
          <TopNavBar menus={menus} />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
