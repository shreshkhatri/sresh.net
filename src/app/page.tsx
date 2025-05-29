import Jumbotorn from "@/app/UI/components/Jumbotorn";
import Introduction from "@/app/UI/components/Introduction";
import Skills from "@/app/UI/components/Skills";
import Experiences from "@/app/UI/components/Experiencecs";
import { getExperiences } from "./lib/assets/helperFunctions/dataloaders";

export default async function Home() {
  var experiences = await getExperiences();

  //as we cant depend upon the ordering of the record in database, we have to sort it manually here on the basis of descending order of starting date
  const sortedExperiences = experiences.sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;

    return dateB - dateA;
  });

<<<<<<< HEAD
  console.log(experiences);

=======
>>>>>>> 9a9c7db54db5f77950c393a55c69e4b81dd895d3
  return (
    <>
      <Jumbotorn />
      <Introduction />
      <Experiences experiences={sortedExperiences} />
      <Skills />
    </>
  );
}
