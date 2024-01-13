'use client';
import { useEffect } from 'react';
import Experiencecs from '@/components/Experiencecs';
import Introduction from '@/components/Introduction';
import Jumbotorn from '@/components/Jumbotorn';
import Skills from '@/components/Skills';


export default function Home() {

  useEffect(()=>{
    document.title='Home';
  });
  
  return (
    <div>
      <Jumbotorn />
      <Introduction />
      <Experiencecs />
      <Skills />
    </div>
  )
}
