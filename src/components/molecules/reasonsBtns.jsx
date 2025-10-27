import { useState } from "react";
import { FaFileAlt, FaEnvelope } from "react-icons/fa";
import { StudyPlan } from "./studyPlan";
import { CustomLink } from "../atoms/customLInk";
import styles from "./reasonsBtns.module.css";

function ReasonsBtns() {
  const [showStudyPlan, setShowStudyPlan] = useState(false);

  return (
    <>
      <div className={styles.actions}>
        <button
          onClick={() => setShowStudyPlan(true)}
          className={styles.actionBtn}
        >
          <FaFileAlt />
          <span>Ver plan de estudios</span>
        </button>

        <CustomLink
          href="#contact"
          className={styles.actionBtn}
        >
          <FaEnvelope />
          <span>Solicitar información</span>
        </CustomLink>
      </div>

      {showStudyPlan && (
        <StudyPlan onClose={() => setShowStudyPlan(false)} />
      )}

    
    </>
  );
}
export { ReasonsBtns };
