'use client';
import { useState, Fragment, FC } from 'react';
import Link from 'next/link'
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import { MobileFriendlyDrawerProps } from '../app/types/types';
import { Grid } from '@mui/joy';
import { PATH_TO_ROOT } from '@/app/assets/data';
import ModeToggler from './ModeToggler';

export default function MobileFriendlyDrawer({ open, setOpen, menus }: MobileFriendlyDrawerProps) {


  return (
    <Grid sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
      <IconButton sx={{ padding: 2 }} color="neutral" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <ModeToggler />
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>

        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          {
            menus.map((menu, index) => {
              return (<Link key={index} href={PATH_TO_ROOT.includes(menu.toLocaleLowerCase()) ? '/' : `/${menu.toLocaleLowerCase()}`}><ListItemButton >{menu}</ListItemButton></Link>)
            })
          }

        </List>
      </Drawer>
    </Grid>
  );
}