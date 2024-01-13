'use client';
import { useEffect } from "react";
import { Box } from "@mui/joy";
import ItemPortfolio from "@/components/items/ItemPortfolio";
import { portfolioArray } from "@/assets/data/portfolio";



export default function Experiences() {
    useEffect(()=>{
        document.title='Portfolio';
      });
    
      
      return (
        <Box display={'flex'} justifyContent={'center'} gap={2} flexWrap={'wrap'} sx={{pt:5}}>
          {
            portfolioArray.map((portfolio,index)=>{
              return <ItemPortfolio key={index} src={portfolio.src} title={portfolio.title} description={portfolio.description}/>
            })
          }
           
        </Box>
      )
}
