import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


import CountrySelector from './CountrySelector';
import ProfileCard from './ProfileCard';


export default function ContactForm() {
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
                <Card>

                    <Box>

                        <Typography level="title-md">Contact Form</Typography>
                        <Typography level="body-sm">
                            Please use following form for leaving your message & I will be responding at the earliest possible time.
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                    >
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    sx={{
                                        display: {
                                            sm: 'flex-column',
                                            md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}
                                >
                                    <Input size="sm" placeholder="First name" />
                                    <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
                                </FormControl>
                            </Stack>

                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    size="sm"
                                    type="email"
                                    startDecorator={<EmailRoundedIcon />}
                                    placeholder="your email"
                                    sx={{ flexGrow: 1 }}
                                />
                            </FormControl>

                            <div>
                                <CountrySelector />
                            </div>
                            <Textarea
                                size="sm"
                                minRows={4}
                                sx={{ mt: 1.5 }}
                                defaultValue="Your message ..."
                            />

                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
                    >


                        <FormControl>
                            <FormLabel>Your Name</FormLabel>
                            <Input size="sm"  />
                        </FormControl>
                        <FormControl sx={{ flexGrow: 1 }}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                size="sm"
                                type="email"
                                startDecorator={<EmailRoundedIcon />}
                                placeholder="email"
                        
                                sx={{ flexGrow: 1 }}
                            />
                        </FormControl>

                        <div>
                            <CountrySelector />
                        </div>
                      
                    </Stack>
                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>
                            <Button size="sm" variant="outlined" color="success">
                                Send Message
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>


            </Stack>
        </Box>
    );
}
