'use client';
import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';

import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import CountrySelector from './CountrySelector';
import ProfileCard from './ProfileCard';
import { CountryType } from '../app/types/types';


export default function ContactForm() {

    const [fname,setFname] =  React.useState('');
    const [lname, setLname] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [userMessage,setUserMessage] = React.useState('');
    const [country,setCountry] = React.useState<CountryType | null>(null);


    const handleFormSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        alert(fname+lname+email+userMessage+country?.label);
    };
    return (
        <Box
            sx={{
                flex: 1,
                width: '100%',
            }}
        >

            <Stack
                spacing={2}
                sx={{
                    display: 'flex',
                    maxWidth: '800px',
                    mx: 'auto',
                    px: {
                        xs: 2,
                        md: 6,
                    },
                    py: {
                        xs: 2,
                        md: 3,
                    },
                }}
            >
                <ProfileCard />

                <Box component="form" onSubmit={handleFormSubmit}>
                    <Card>



                        <Typography level="title-md">Contact Form</Typography>
                        <Typography level="body-sm">
                            Please use following form for leaving your message & I will be responding at the earliest possible time.
                        </Typography>

                        <Divider />
                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{ display: { md: 'flex' }, my: 1 }}
                        >
                            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                <Stack spacing={1}>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl
                                        sx={{
                                            display: {
                                                sm: 'flex-column',
                                                md: 'flex-row',
                                            },
                                            gap: 2,
                                        }}
                                    >
                                        <Input value={fname} size="sm" placeholder="First name" onChange={e=>setFname(e.currentTarget.value)} autoComplete='off'/>
                                        <Input value={lname} size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} onChange={e=>setLname(e.currentTarget.value)} autoComplete='off'/>
                                    </FormControl>
                                </Stack>

                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        value={email}
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="your email"
                                        sx={{ flexGrow: 1 }}
                                        onChange={e=>setEmail(e.currentTarget.value)}
                                        autoComplete='off'
                                    />
                                </FormControl>

                                <div>
                                    <CountrySelector country={country} setCountry={setCountry}/>
                                </div>
                                <Textarea
                                    size="sm"
                                    minRows={4}
                                    sx={{ mt: 1.5 }}
                                    value={userMessage}
                                    onChange={e=>setUserMessage(e.currentTarget.value)}
                                    defaultValue="Your message ..."
                                    autoComplete='off'
                                />

                            </Stack>
                        </Stack>

                        <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                                <Button size="sm" variant="outlined" color="neutral">
                                    Cancel
                                </Button>
                                <Button type='submit' size="sm" variant="outlined" color="success">
                                    Send Message
                                </Button>
                            </CardActions>
                        </CardOverflow>
                    </Card>
                </Box>


            </Stack>
        </Box>
    );
}
