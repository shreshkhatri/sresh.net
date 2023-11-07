
'use client';
import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google'
import MobileFriendlyDrawer from '@/components/MobileFriendlyDrawerMobileFriendlyDrawer';
import TopNavBar from '@/components/TopNavBar';
const inter = Inter({ subsets: ['latin'] })
import { CssVarsProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';
import { getInitColorSchemeScript } from '@mui/joy/styles';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false);
  const menus = ['Home', 'About', 'Contact'];

  return (
    <CssVarsProvider >
      <CssBaseline  />
      <html lang="en">
        <body className={inter.className}>  {getInitColorSchemeScript()}
          <MobileFriendlyDrawer open={open} setOpen={setOpen} menus={menus} />
          <TopNavBar menus={menus} />
          {children}
        </body>
      </html>
    </CssVarsProvider>
  )
}
