
import { Box } from "@mui/joy";
import {Typography} from "@mui/joy";
import PageTemplate from "../UI/components/PageTemplate";
import { Metadata } from 'next'
import { MENU_ITEMS } from "../lib/assets/data/data";
import { PageTemplateProps } from "../lib/assets/types/types";


export const metadata:Metadata = {
  title: 'Experiences',
};

const pageTemplateProps: PageTemplateProps = {
  menus:MENU_ITEMS,
  selectedMenu:'experiences'
};


export default function Experiences() {
      
      return (
        <PageTemplate pageTemplateProps={pageTemplateProps}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} sx={{minHeight:'70vh'}}>
            <Typography textAlign={'center'}> Experiences Page Under construction</Typography>
        </Box>
        </PageTemplate>
      )
}
