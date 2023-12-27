
'use client';
import './globals.css';
import React from 'react';
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
  const menus = ['Home', 'Experiences','Gallery','Portfolio', 'Contact'];

  return (
  
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />  
        <meta name="suesh personal website" content="Bio , portfolio, experience and more about suresh" />  
        <meta name="author" content="suresh khatri" />  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
      </head>
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
