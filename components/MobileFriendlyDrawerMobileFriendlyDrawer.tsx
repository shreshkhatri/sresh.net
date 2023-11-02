'use client';
import { useState, Fragment, FC } from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import { MobileFriendlyDrawerProps } from '@/types/typeMobileFriendlyDrawerProps ';
import { Grid } from '@mui/joy';

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
              return (<ListItemButton key={index}>{menu}</ListItemButton>)
            })
          }
        </List>
      </Drawer>
    </Grid>
  );
}