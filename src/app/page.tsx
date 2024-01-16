import Jumbotorn from "@/app/UI/components/Jumbotorn";
import Introduction from "@/app/UI/components/Introduction";
import Skills from "@/app/UI/components/Skills";
import Experiences from "@/app/UI/components/Experiencecs";
import { getExperiences } from "./lib/assets/helperFunctions/dataloaders";
import PageTemplate from "./UI/components/PageTemplate";

export default async function Home() {

  const experiences = await getExperiences();

  return (
    <PageTemplate>
      <Jumbotorn />
      <Introduction />
      <Experiences experiences={experiences} />
      <Skills />
    </PageTemplate>
  );
}
