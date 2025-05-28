import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
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
                <Avatar src="/images/SureshProfilePic.jpeg" sx={{ '--Avatar-size': '10rem',border:'3px solid white' }} />
                <Typography level="title-lg">Suresh Khatri (BSc , MSc)</Typography>
                <Typography level="body-md">Also, MD at HOQUE Consultancy Nepal Pvt Ltd</Typography>
                <hr></hr>
                <Typography level="body-sm" >You could write me on the following email addresses</Typography>
                <Typography level="body-sm" fontWeight={'bold'}>
                    shresh.khatri@gmail.com
                </Typography>
                <br></br>
                <br></br>
                <Typography level="body-sm" >You could also connect me on following medias.</Typography>
                <Stack
                    direction="row"
                    spacing={3}
                    sx={{ display: { md: 'flex' }, my: 1 }}
                >
                    <SocialIcon url="https://www.linkedin.com/in/shreshkc" target='_blank' />
                    <SocialIcon url="https://www.facebook.com/shresh.kc" target='_blank' />
                    <SocialIcon url="https://github.com/shreshkhatri" target='_blank' />
                </Stack>

            </CardContent>
        </Card>
    );
}
