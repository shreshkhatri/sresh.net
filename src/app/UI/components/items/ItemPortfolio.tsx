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
        <Card sx={{ width: 400, p: 2 }}>
            <div>
                <Link href={src} target="_blank" style={{textDecoration:'none'}}><Typography level="title-lg">{title}</Typography></Link>
                <Typography level="body-sm">{description}</Typography>
            </div>
            <AspectRatio >
                <iframe src={src} title={title} loading='lazy'  />
            </AspectRatio>
        </Card>
    );
}