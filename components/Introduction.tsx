import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
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
                <Typography fontSize="xl4" fontWeight="xl" textColor="#000">
                    Introduction
                </Typography>

            </CardOverflow>
            <CardContent sx={{ gap: 1.5, minWidth: 200,paddingX:7 }}>
                <CardContent>
                    <Typography fontSize="md" sx={{ mt: 0.5 }}>
                        With a seasoned career spanning over two years collaborating with esteemed clients such as QuickBlox (www.quickblox.com), StartUpDen (startupden.org), and Prosol Ltd, my journey has been defined by the pursuit of innovation and technological excellence. Spearheading the development of AI-driven web applications, I&apos;ve had the privilege to deliver cutting-edge solutions tailored to meet the unique needs of these prominent clients. Notably, my collaboration with QuickBlox facilitated the creation of user-friendly web experiences, while the association with StartUpDen enabled the development of a virtual incubator utilizing leading-edge technologies.

                        <br></br><br></br>Moreover, my impactful tenure with London South Bank University served as a platform to hone my expertise, leveraging innovative technologies such as Next.js, TypeScript, MUI, and JOY to craft AI-powered solutions and NLP models. Guiding students through lecture sessions, providing insights into NLP, and ensuring a comprehensive learning experience, I&apos;ve actively contributed to shaping the next generation of tech enthusiasts while expanding the horizons of technology in academia.

                        <br></br><br></br>My journey continues, driven by an unwavering commitment to pushing the boundaries of innovation, creating impactful user experiences, and contributing to pioneering technological solutions in collaboration with forward-thinking entities.
                    </Typography>
                </CardContent>
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                        '--variant-borderWidth': '2px',
                        borderRadius: 40,
                        borderColor: 'primary.500',
                        mx: 'auto',
                    }}
                >
                    Know more
                </Button>
            </CardContent>
        </Card>
    );
}
