'use client';
import { useEffect } from "react";
import { Box } from "@mui/joy";
import ItemPortfolio from "@/app/UI/components/items/ItemPortfolio";
import { portfolioArray } from "@/app/lib/assets/data/portfolio";



export default function Experiences() {
    useEffect(()=>{
        document.title='Portfolio';
      });
    
      
      return (
        <Box display={'flex'} flexDirection={'column'} gap={2} flexWrap={'wrap'} sx={{minHeight:'80vh',p:3}}>
          {
            portfolioArray.map((portfolio,index)=>{
              return <ItemPortfolio key={index} src={portfolio.src} title={portfolio.title} description={portfolio.description}/>
            })
          }
           
        </Box>
      )
}