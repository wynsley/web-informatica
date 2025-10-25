import { Courses } from "../organisms/sectionCourses";
import { Home } from "../organisms/sectionHome";
import { Reasouns } from "../organisms/sectionReasons";
import { Caroussel } from "../organisms/caroussel";
import { Opportinities } from "../organisms/sectionOpportunities";
import { Graduates } from "../organisms/sectionGraduates";
import { Contact } from "../organisms/sectionContact";

function InformaticPage() {

  return (
    <main>
      <Home/>
      <Courses/>
      <Caroussel/>
      <Reasouns/>
      <Opportinities/>
      <Graduates/>
      <Contact/>
    </main>
  )
}

export { InformaticPage }