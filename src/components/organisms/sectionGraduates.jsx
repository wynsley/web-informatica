import { useState } from "react";
import { GraduateCardsList } from "../molecules/GraduateCardsList";
import { Modal } from "../atoms/Modal";
import styles from "./SectionGraduates.module.css";

export function Graduates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardInfo = {
    competencias: {
      title: "Competencias y habilidades",
      text: `El egresado de la carrera de Computación e Informática cuenta con un perfil integral que combina el dominio técnico con la capacidad analítica y la adaptabilidad a nuevas tecnologías. 
        Desarrolla soluciones informáticas efectivas, gestiona proyectos tecnológicos con metodología ágil y mantiene una visión crítica frente a los desafíos del entorno digital. 
        Entre sus competencias destacan la programación estructurada y orientada a objetos, la gestión de bases de datos, el análisis de sistemas y la automatización de procesos empresariales. 
        Asimismo, cultiva habilidades interpersonales como liderazgo, trabajo en equipo y comunicación asertiva, esenciales para desenvolverse en entornos colaborativos.`,
    },
    tecnicas: {
      title: "Capacidades técnicas",
      text:  `El egresado domina diversas herramientas, lenguajes y entornos tecnológicos que le permiten adaptarse a los requerimientos del mercado laboral actual. 
        Posee experiencia en el desarrollo de software web, móvil y de escritorio, así como en la administración de sistemas operativos, redes y servidores. 
        También está capacitado en el manejo de bases de datos relacionales y no relacionales, implementación de medidas de seguridad informática, y soporte técnico a infraestructuras de hardware y software. 
        Su formación le permite integrarse en equipos multidisciplinarios para diseñar, construir y mantener soluciones tecnológicas innovadoras, eficientes y seguras.`,
    },
    valores: {
      title: "Valores y visión",
      text: `El egresado se distingue por su integridad, ética profesional y compromiso con la mejora continua. 
        En su desempeño profesional, promueve la transparencia, la responsabilidad social y la innovación tecnológica al servicio de la comunidad. 
        Tiene una visión orientada al futuro y al desarrollo sostenible, buscando siempre contribuir con soluciones que generen impacto positivo. 
        La empatía, el respeto y la colaboración son principios que guían su labor, fomentando un entorno de trabajo armónico y productivo. 
        Además, mantiene una actitud abierta al aprendizaje constante, adaptándose a los cambios tecnológicos con resiliencia y creatividad.`,
    },
  };

  const handleSelect = (key) => {
    setSelectedCard(cardInfo[key]);
    setModalOpen(true);
  };

  return (
    <section id="graduates" className={styles.graduates}>
      <div className={styles.infograd}>
        <h2 className={styles.titlegrad}>
          Estas son las <span className={styles.habilidades}>Habilidades</span>{" "}
          que obtiene un egresado de la carrera de{" "}
          <span className={styles.habilidades}>Computación e Informática</span>
        </h2>

        <p className={styles.parafgrad}>
          Nuestros egresados se distinguen por sus sólidas competencias técnicas
          y su capacidad para planificar y ejecutar proyectos con calidad e
          innovación. Poseen habilidades blandas como liderazgo, trabajo en
          equipo y comunicación efectiva, junto con una ética profesional y un
          compromiso constante con la mejora continua, lo que les permite
          aportar soluciones creativas y contribuir al desarrollo de su entorno.
        </p>

        <GraduateCardsList onSelect={handleSelect} />
      </div>

      <div>
        <img src="/EGRESADO.png" alt="Egresado" className={styles.imggradu} />
      </div>

      {modalOpen && (
        <Modal
          title={selectedCard.title}
          text={selectedCard.text}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
