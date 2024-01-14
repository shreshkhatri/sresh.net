'use client';
import { useEffect } from 'react';
import Jumbotorn from './UI/components/Jumbotorn';
import Introduction from './UI/components/Introduction';
import Skills from './UI/components/Skills';
import Experiences from './UI/components/Experiencecs';

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
