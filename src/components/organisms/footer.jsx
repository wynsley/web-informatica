import styles from './footer.module.css'

function Footer () {
    return (
        <footer className={styles.footer}>
            <small className={styles.copyright}>© 2025 web informática. Todos los derechos reservados.</small>
            <small className={styles.autores}>
                <span>Autores:</span> Wynsley Durán , Cesar Guevara, Luis Solano
            </small>
        </footer>
    )
}

export {Footer}