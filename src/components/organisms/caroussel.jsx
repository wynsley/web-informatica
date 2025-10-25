import { FaCode, FaTools, FaShieldAlt, FaLaptopCode, FaMobileAlt, FaNetworkWired } from 'react-icons/fa';
import { CarousselItem } from '../molecules/carousselItem';
import styles from './caroussel.module.css';

function Caroussel() {
  const techAreas = [
    {
      icon: <FaTools />,
      text: 'Soporte Técnico'
    },
    {
      icon: <FaNetworkWired />,
      text: 'Gestión de Redes'
    },
    {
      icon: <FaShieldAlt />,
      text: 'Seguridad Informática'
    },
    {
      icon: <FaCode />,
      text: 'Programación'
    },
    {
      icon: <FaMobileAlt />,
      text: 'Desarrollo de APPs Móviles'
    },
    {
      icon: <FaLaptopCode />,
      text: 'Diseño Web'
    },
  ];

  return (
    <section className={styles.caroussel}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {techAreas.map((area, index) => (
            <CarousselItem
              key={`first-${index}`}
              icon={area.icon}
              text={area.text}
            />
          ))}

          {techAreas.map((area, index) => (
            <CarousselItem
              key={`second-${index}`}
              icon={area.icon}
              text={area.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Caroussel };