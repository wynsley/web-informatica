import { Courses } from "../organisms/sectionCourses";
import { Home } from "../organisms/sectionHome";
import { Reasouns } from "../organisms/sectionReasons";
import { Opportinities } from "../organisms/sectionOportunities";
import { Graduates } from "../organisms/sectionGraduates";
import { Contact } from "../organisms/sectionContact";

function InformaticPage() {

  return (
    <main>
      <Home/>
      <Courses/>
      <Reasouns/>
      <Opportinities/>
      <Graduates/>
      <Contact/>
    </main>
  )
}

export { InformaticPage }