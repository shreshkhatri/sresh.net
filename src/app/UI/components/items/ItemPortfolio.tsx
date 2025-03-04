import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Link from 'next/link';

type PortfolioProps = {
    src: string,
    title: string,
    description: string
}

export default function ItemPortfolio({ src, title, description }: PortfolioProps) {
    return (
        <Card sx={{ width: {xs:'100%',sm:'100%',md:'30%'}, p: 3}}>
            <div>
                <Link href={src} target="_blank" style={{textDecoration:'none'}} ><Typography level="title-lg">{title}</Typography></Link>
                <Typography paddingTop={2} level="body-sm">{description}</Typography>
            </div>
        </Card>
    );
}