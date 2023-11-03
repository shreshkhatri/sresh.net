import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { SocialIcon } from 'react-social-icons';
import Stack from '@mui/joy/Stack';

export default function ProfileCard() {
    return (
        <Card
            sx={{
                maxWidth: '100%',
                boxShadow: 'lg',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                <Typography level="title-lg">Suresh Khatri</Typography>
                <Typography level="body-sm" >You could write me on any of the following email addresses</Typography>
                <Typography level="body-sm" fontWeight={'bold'}>
                    khatris4@lsbu.ac.uk or shresh.khatri@gmail.com
                </Typography>
                <br></br>
                <br></br>
                <Typography level="body-sm" >You could also connect me on following medias.</Typography>
                <Stack
                    direction="row"
                    spacing={3}
                    sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                >
                    <SocialIcon url="https://www.linkedin.com/in/shreshkc" target='_blank' />
                    <SocialIcon url="https://www.facebook.com/shresh.kc" target='_blank' />
                </Stack>

            </CardContent>
        </Card>
    );
}
