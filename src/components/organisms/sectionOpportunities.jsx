import styles from './sectionOpportunities.module.css'
import { Title } from '../atoms/TitleOpportunities'
import { OpportunityCard } from '../molecules/OpportunityCard'

const SectionOpportunities = () => {
  const title = 'Explora tu Próximo'
  const opportunities = [
    { 
      id: 1, 
      title: 'Soporte Técnico', 
      description: (
        <p className={styles.list}>
          Mantenimiento preventivo y correctivo
          Instalación de software y hardware
          Diagnóstico y solución de fallos
          Soporte remoto y presencial
          Configuración de equipos y periféricos
          Respaldo y recuperación de datos
        </p>

      ),
      className: styles.soporte
    },
    { 
      id: 2, 
      title: 'Redes', 
      description: (
        <p className={styles.list}>
          Administración de redes LAN, WAN y Wi-Fi
          Configuración de routers y switches
          Seguridad y monitoreo de red
          Instalación de cableado estructurado
          Redes virtuales y servicios en la nube
          Implementación de servidores de red
        </p>
      ),
      className: styles.redes
    },
    { 
      id: 3, 
      title: 'Seguridad Informática', 
      description: (
        <p className={styles.list}>
          Protección contra amenazas digitales
          Auditoría y análisis de vulnerabilidades
          Gestión de respaldos y recuperación
          Control de accesos y cifrado de datos
          Monitoreo de incidentes de seguridad
          Políticas de ciberseguridad
        </p>
      ),
      className: styles.seguridad
    },
    { 
      id: 4, 
      title: 'Programación', 
      description: (
        <p className={styles.list}>
          Desarrollo web y móvil
          Lógica de programación
          Creación de APIs y microservicios
          Conexión con bases de datos
          Automatización de procesos
          Diseño de sistemas escalables
        </p>
      ),
      className: styles.programacion
    },
    { 
      id: 5, 
      title: 'Diseño', 
      description: (
        <p className={styles.list}>
          Diseño de interfaces (UI)
          Creación de identidad visual
          Diseño responsivo
          Experiencia de usuario (UX)
          Edición de imágenes y videos
          Presentaciones y materiales gráficos
        </p>
      ),
      className: styles.diseno
    },
    { 
      id: 6, 
      title: 'Edición', 
      description: (
        <p className={styles.list}>
          Edición de video profesional
          Mezcla y corrección de audio
          Retoque fotográfico
          Animaciones básicas y motion graphics
          Postproducción audiovisual
          Exportación en diferentes formatos
        </p>
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
