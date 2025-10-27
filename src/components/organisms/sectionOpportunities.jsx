import styles from './sectionOpportunities.module.css'

function Opportinities() {
  const title = 'Explora tu Próximo'
  return (
    <section id="opportunities" className={styles.opportunities}>
      <h2 className={styles.title}>{title} <span>Desafío Profesional</span></h2>
      <nav className={styles.navOpportunities}>
        <ul className={styles.navOppMenu}>
          <li className={styles.menuItem}>
            <a href="" className={styles.itemLnk}>Soporte Técnico</a>
          </li>
          <li className={styles.menuItem}>
            <a href="" className={styles.itemLnk}>Redes</a>
          </li>
          <li className={styles.menuItem}>
            <a href="" className={styles.itemLnk}>Seguridad Informática</a>
          </li>
          <li className={styles.menuItem}>
            <a href="" className={styles.itemLnk}>Programación</a>
          </li>
          <li className={styles.menuItem}>
            <a href="" className={styles.itemLnk}>Diseño</a>
          </li>
          <li className={styles.menuItem}>
            <a href="" className={styles.itemLnk}>Edición</a>
          </li>
        </ul>
      </nav>
      <hr className={styles.line}/>
      <div>
        
      </div>
    </section>
  )
}

export { Opportinities }