
import Jumbotorn from '@/app/UI/components/Jumbotorn';
import Introduction from '@/app/UI/components/Introduction';
import Skills from '@/app/UI/components/Skills';
import Experiences from '@/app/UI/components/Experiencecs';
import { getExperiences } from './lib/assets/helperFunctions/dataloaders';

export default async function Home() {

  //getting experiences data on server
  const experiences = await getExperiences();
  
  return (
    <div>
      <Jumbotorn />
      <Introduction />
      <Experiences experiences={experiences}/>
      <Skills />
    </div>
  )
}

