
import { Box, Typography } from "@mui/joy";
import ItemPortfolio from "@/app/UI/components/items/ItemPortfolio";
import { portfolioArray } from "@/app/lib/assets/data/portfolio";
import PageTemplate from "../UI/components/PageTemplate";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Portfolio',
};

export default function Experiences() {
      
      return (
        <PageTemplate>
          <Typography level="h2" textAlign={"center"}>
            Accomplished Projects
          </Typography>
        <Box display={'flex'} flexDirection={'row'} gap={2} justifyContent={'center'} flexWrap={'wrap'} sx={{minHeight:'80vh',p:3}}>
          {
            portfolioArray.map((portfolio,index)=>{
              return <ItemPortfolio key={index} src={portfolio.src} title={portfolio.title} description={portfolio.description}/>
            })
          } 
        </Box>
        </PageTemplate>
      )
}
