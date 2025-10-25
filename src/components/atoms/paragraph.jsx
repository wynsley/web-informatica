import styles from './paragraph.module.css'

function Paragraph () {
  const description = `Explora el poder de la tecnología, el código y la innovación. 
    Cada línea que escribimos, cada sistema que diseñamos y cada idea que desarrollamos, 
    construye el mundo digital del mañana.Bienvenido a mi espacio, donde la Informática 
    se convierte en conocimiento, creatividad y evolución.`;
    return(
      <p className={styles.description}>{description}</p>
    )
}

export {Paragraph}