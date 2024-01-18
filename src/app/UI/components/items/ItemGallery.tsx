import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function ItemGallery({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <Card  sx={{display:'flex',flexDirection:'column', width:'30%',overflow:'visible'}} >
      <div style={{overflow:'visible'}}>
      {children}
      </div>
    </Card>
  );
}