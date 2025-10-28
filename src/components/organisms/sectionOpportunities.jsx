import styles from './sectionOpportunities.module.css'

function Opportinities() {
  const title = 'Explora tu Próximo'
  return (
    <section id="opportunities" className={styles.opportunities}>
      <h2 className={styles.title}>{title} <span>Desafío Profesional</span></h2>
    </section>
  )
}

export { Opportinities }