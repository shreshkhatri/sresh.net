
'use client';
import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google'
import MobileFriendlyDrawer from '@/app/components/MobileFriendlyDrawerMobileFriendlyDrawer';
import TopNavBar from '@/app/components/TopNavBar';
const inter = Inter({ subsets: ['latin'] })
import { CssVarsProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false);
  const menus = ['Home', 'About', 'Contact'];

  return (
    <CssVarsProvider >
      <CssBaseline />
      <html lang="en">
        <body className={inter.className}>
          <MobileFriendlyDrawer open={open} setOpen={setOpen} menus={menus} />
          <TopNavBar menus={menus} />
          {children}
        </body>
      </html>
    </CssVarsProvider>
  )
}
