import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export default function Jumbotorn() {
  return (
    <Card sx={{ minHeight: '500px', width: '100%',border:0,
    borderRadius:0,}}>
      <CardCover>
        <img
          src="/images/suresh.jpeg"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h1" textColor="#fff" textAlign='center'>
        Redefining IT Excellence, Your Partner in Progress
        </Typography>
        <Typography
          textColor="neutral.300"
          textAlign='center'
        >
          - Suresh
        </Typography>
      </CardContent>
    </Card>
  );
}
