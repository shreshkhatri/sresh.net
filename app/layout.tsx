
'use client';
import './globals.css';
import { useState } from 'react';
import { Inter } from 'next/font/google'
import MobileFriendlyDrawer from '@/app/components/MobileFriendlyDrawerMobileFriendlyDrawer';
import TopNavBar from '@/app/components/TopNavBar';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false);
  const menus = ['Home', 'About', 'Contact'];

  return (
    <html lang="en">
      <body className={inter.className}>
      <MobileFriendlyDrawer open={open} setOpen={setOpen} menus={menus} />
      <TopNavBar menus={menus} />
        {children}
        </body>
    </html>
  )
}
