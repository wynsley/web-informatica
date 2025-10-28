import styles from './sectionOpportunities.module.css'
import { Title } from '../atoms/TitleOpportunities'
import { ListItem } from '../atoms/ListItem'
import { OpportunityCard } from '../molecules/OpportunityCard'

const SectionOpportunities = () => {
  const title = 'Explora tu Próximo'
  const opportunities = [
    { 
      id: 1, 
      title: 'Soporte Técnico', 
      description: (
        <ul className={styles.list}>
          <li>Mantenimiento preventivo y correctivo</li>
          <li>Instalación de software y hardware</li>
          <li>Diagnóstico y solución de fallos</li>
          <li>Soporte remoto y presencial</li>
          <li>Configuración de equipos y periféricos</li>
          <li>Respaldo y recuperación de datos</li>
        </ul>
      ),
      className: styles.soporte
    },
    { 
      id: 2, 
      title: 'Redes', 
      description: (
        <ul className={styles.list}>
          <li>Administración de redes LAN, WAN y Wi-Fi</li>
          <li>Configuración de routers y switches</li>
          <li>Seguridad y monitoreo de red</li>
          <li>Instalación de cableado estructurado</li>
          <li>Redes virtuales y servicios en la nube</li>
          <li>Implementación de servidores de red</li>
        </ul>
      ),
      className: styles.redes
    },
    { 
      id: 3, 
      title: 'Seguridad Informática', 
      description: (
        <ul className={styles.list}>
          <li>Protección contra amenazas digitales</li>
          <li>Auditoría y análisis de vulnerabilidades</li>
          <li>Gestión de respaldos y recuperación</li>
          <li>Control de accesos y cifrado de datos</li>
          <li>Monitoreo de incidentes de seguridad</li>
          <li>Políticas de ciberseguridad</li>
        </ul>
      ),
      className: styles.seguridad
    },
    { 
      id: 4, 
      title: 'Programación', 
      description: (
        <ul className={styles.list}>
          <li>Desarrollo web y móvil</li>
          <li>Lógica de programación</li>
          <li>Creación de APIs y microservicios</li>
          <li>Conexión con bases de datos</li>
          <li>Automatización de procesos</li>
          <li>Diseño de sistemas escalables</li>
        </ul>
      ),
      className: styles.programacion
    },
    { 
      id: 5, 
      title: 'Diseño', 
      description: (
        <ul className={styles.list}>
          <li>Diseño de interfaces (UI)</li>
          <li>Creación de identidad visual</li>
          <li>Diseño responsivo</li>
          <li>Experiencia de usuario (UX)</li>
          <li>Edición de imágenes y videos</li>
          <li>Presentaciones y materiales gráficos</li>
        </ul>
      ),
      className: styles.diseno
    },
    { 
      id: 6, 
      title: 'Edición', 
      description: (
        <ul className={styles.list}>
          <li>Edición de video profesional</li>
          <li>Mezcla y corrección de audio</li>
          <li>Retoque fotográfico</li>
          <li>Animaciones básicas y motion graphics</li>
          <li>Postproducción audiovisual</li>
          <li>Exportación en diferentes formatos</li>
        </ul>
      ),
      className: styles.edicion
    },
  ]

  return (
    <section id="opportunities" className={styles.opportunities}>
      <Title main={title} highlight="Desafío Profesional" />
      <div className={styles.cardsContainer}>
        {opportunities.map((item) => (
          <OpportunityCard 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            className={item.className} 
          />
        ))}
      </div>
    </section>
  )
}

export { SectionOpportunities }
