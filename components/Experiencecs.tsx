import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import ItemWorkExperience from './items/itemWorkExperience';

export default function Experiencecs() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <Card
    size="lg"
    variant="plain"
    orientation="vertical"
    sx={{
        border: 0,
        borderRadius: 0,
        textAlign: 'center',
        maxWidth: '100%',
        overflow: 'auto',
    }}
>
    <CardOverflow
        sx={{
            display: 'flex',
            paddingTop: 5,
            flexDirection: 'column',
            justifyContent: 'center',
            px: 'var(--Card-padding)',
        }}
    >
        <Typography fontSize="xl4" fontWeight="xl" textColor="#000">
            Experiences
        </Typography>

    </CardOverflow>
    <CardContent sx={{ gap: 1.5, minWidth: 200,paddingX:7 }}>
    <List
        size="lg"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': '#8a4baf',
          '--joy-palette-neutral-plainHoverBg': 'transparent',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },

          '--List-insetStart': '32px',
          '--ListItem-paddingY': '0px',
          '--ListItem-paddingRight': '16px',
          '--ListItem-paddingLeft': '21px',
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',

          [`& .${listItemButtonClasses.root}`]: {
            borderLeftColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderLeftColor: 'currentColor',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem nested>
          <ListItem component="div" startAction={<BusinessCenterIcon />}>
           
          </ListItem>
          <List sx={{ '--List-gap': '0px' }}>
            <ListItem >
              <ListItemButton sx={{display: 'inline-block'}}><ItemWorkExperience designation='Lecturer @ London South Bank University' dates='February, 2022 - Present' duties=''/></ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested>
          <ListItem component="div" startAction={<BusinessCenterIcon />}>
           
          </ListItem>
          <List sx={{ '--List-gap': '0px' }}>
            <ListItem >
            <ListItemButton sx={{display: 'inline-block'}}><ItemWorkExperience designation='Full Stack Developer @ London South Bank University' dates='June, 2021 - Present' duties=''/></ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </CardContent>
</Card>
  )
}