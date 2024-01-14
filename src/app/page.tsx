'use client';
import { useEffect } from 'react';
import Jumbotorn from '@/app/UI/components/Jumbotorn';
import Introduction from '@/app/UI/components/Introduction';
import Skills from '@/app/UI/components/Skills';
import Experiences from '@/app/UI/components/Experiencecs';

export default function Home() {

  useEffect(()=>{
    document.title='Home';
  });
  
  return (
    <div>
      <Jumbotorn />
      <Introduction />
      <Experiences />
      <Skills />
    </div>
  )
}
