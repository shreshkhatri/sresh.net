'use client';
import Experiencecs from '@/app/components/Experiencecs';
import Introduction from '@/app/components/Introduction';
import Jumbotorn from '@/app/components/Jumbotorn';

import { Typography } from '@mui/joy';


export default function Home() {

  return (
    <>
      <Jumbotorn />
      <Introduction />
      <Experiencecs />
      
    </>
  )
}
