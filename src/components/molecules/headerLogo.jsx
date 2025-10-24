import { CustomLink } from '../atoms/customLInk'
import styles from './headerLogo.module.css'

function Logo () {
    const logo = 'Informática'
    return (
        <div className={styles.logo}>
            <CustomLink 
            text={logo} 
            href='/'
            className={styles.logo__name}
            size='25px'
            />
        </div>
    )
}

export {Logo}