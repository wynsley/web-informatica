import { useState } from "react";
import { FaTimes, FaDownload, FaTable } from "react-icons/fa";
import styles from "./studyPlan.module.css";

function StudyPlan({ onClose }) {
  const [viewMode, setViewMode] = useState("table"); // 'table' o 'pdf'

  const studyPlanData = {
    semestres: [
      {
        semestre: 1,
        cursos: [
          "Fundamentos de Programación",
          "Matemática Discreta",
          "Introducción a la Informática",
          "Algoritmia",
          "Comunicación",
        ],
      },
      {
        semestre: 2,
        cursos: [
          "Programación Orientada a Objetos",
          "Estructura de Datos",
          "Base de Datos I",
          "Arquitectura de Computadoras",
          "Estadística",
        ],
      },
      {
        semestre: 3,
        cursos: [
          "Desarrollo Web",
          "Base de Datos II",
          "Redes de Computadoras",
          "Ingeniería de Software I",
          "Sistemas Operativos",
        ],
      },
      {
        semestre: 4,
        cursos: [
          "Programación Móvil",
          "Seguridad Informática",
          "Inteligencia Artificial",
          "Ingeniería de Software II",
          "Gestión de Proyectos TI",
        ],
      },
    ],
  };

  const handleDownloadPDF = () => {
    // Ruta del PDF en /public
    window.open("/documents/PLAN-ESTUDIOS.pdf", "_blank");
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Plan de Estudios - Informática</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className={styles.viewToggle}>
          <button
            className={`${styles.toggleBtn} ${
              viewMode === "table" ? styles.active : ""
            }`}
            onClick={() => setViewMode("table")}
          >
            <FaTable /> Ver Tabla
          </button>
          <button
            className={`${styles.toggleBtn} ${
              viewMode === "pdf" ? styles.active : ""
            }`}
            onClick={() => setViewMode("pdf")}
          >
            <FaDownload /> Ver PDF
          </button>
        </div>

        <div className={styles.modalBody}>
          {viewMode === "table" ? (
            <div className={styles.tableContainer}>
              {studyPlanData.semestres.map((sem) => (
                <div key={sem.semestre} className={styles.semestreBlock}>
                  <h3 className={styles.semestreTitle}>
                    Semestre {sem.semestre}
                  </h3>
                  <ul className={styles.cursosList}>
                    {sem.cursos.map((curso, idx) => (
                      <li key={idx} className={styles.cursoItem}>
                        {curso}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <button
                className={styles.downloadBtn}
                onClick={handleDownloadPDF}
              >
                <FaDownload /> Descargar PDF completo
              </button>
            </div>
          ) : (
            <div className={styles.pdfContainer}>
              <iframe
                src="/documents/PLAN-ESTUDIOS.pdf"
                className={styles.pdfViewer}
                title="Plan de Estudios PDF"
              />
              <button
                className={styles.downloadBtn}
                onClick={handleDownloadPDF}
              >
                <FaDownload /> Descargar PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { StudyPlan };
