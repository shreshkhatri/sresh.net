import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { ItemWorkExperienceProps } from '@/app/types/typeItemExperienceProps';

export default function ItemWorkExperience({designation,dates,duties}:ItemWorkExperienceProps) {
  return (
    <Card variant='plain' sx={{cursor:'text'}}>
      <div>
      <Typography level="body-sm">{dates}</Typography>
        <Typography level="title-lg">{designation}</Typography>
        <Typography fontWeight='bold'>Jobs / Duties</Typography>
        <Typography>{duties}</Typography>
      </div>
      
    </Card>
  );
}
