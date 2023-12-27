import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function Introduction() {
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

            </CardOverflow>
            <CardContent sx={{gap:5}} >
                <CardContent sx={{gap:5}}>
                    <Typography level='h2' textAlign={'center'}>Greetings!</Typography>
                    <Typography level="body-md" textAlign="center" >
                     Welcome to my website!, I am Suresh Khatri, an accomplished full-stack developer with over two years of experience specializing in the creation of AI-powered Virtual Assistants and the implementation of Natural Language Processing (NLP) models. My journey includes leading the development of innovative web applications for prominent clients like www.quickblox.com, Lewisham Council, and StartupDen in the UK. Proficient in a diverse range of technologies such as NextJS, React, Flask, Node.js, and MongoDB, I excel in integrating cutting-edge tools like Rasa, NLP JS, and ChatGPT to elevate user interactions. I am passionate about leveraging my skills as a JavaScript/Python developer to contribute to the dynamic field of software development. Let's connect and explore the possibilities of collaboration!
                    </Typography>
                </CardContent>
                <Button 
                    variant="outlined"
                    color="neutral"
                    sx={{
                        '--variant-borderWidth': '2px',
                        borderRadius: 40,
                        borderColor: 'black',
                        mx: 'auto',
                    }}
                >
                    Know more
                </Button>
            </CardContent>
        </Card>
    );
}
