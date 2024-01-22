import Jumbotorn from "@/app/UI/components/Jumbotorn";
import Introduction from "@/app/UI/components/Introduction";
import Skills from "@/app/UI/components/Skills";
import Experiences from "@/app/UI/components/Experiencecs";
import { getExperiences } from "./lib/assets/helperFunctions/dataloaders";
import PageTemplate from "./UI/components/PageTemplate";
import { PageTemplateProps } from "./lib/assets/types/types";
import { MENU_ITEMS } from "./lib/assets/data/data";

const pageTemplateProps: PageTemplateProps = {
  menus:MENU_ITEMS,
selectedMenu:'home'
};

export default async function Home() {
  const experiences = await getExperiences();

  return (
    <PageTemplate pageTemplateProps={pageTemplateProps}>
      <Jumbotorn />
      <Introduction />
      <Experiences experiences={experiences} />
      <Skills />
    </PageTemplate>
  );
}
