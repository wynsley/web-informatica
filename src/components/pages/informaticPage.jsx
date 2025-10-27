import { Courses } from "../organisms/sectionCourses";
import { Home } from "../organisms/sectionHome";
import { Reasons } from "../organisms/sectionReasons";
import { Carousel } from "../organisms/carousel";
import { Opportinities } from "../organisms/sectionOpportunities";
import { Graduates } from "../organisms/sectionGraduates";
import { Contact } from "../organisms/sectionContact";

function InformaticPage() {

  return (
    <main>
      <Home/>
      <Courses/>
      <Carousel/>
      <Reasons/>
      <Opportinities/>
      <Graduates/>
      <Contact/>
    </main>
  )
}

export { InformaticPage }