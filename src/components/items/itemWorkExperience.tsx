import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { ItemWorkExperienceProps } from '@/app/types/types';

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
