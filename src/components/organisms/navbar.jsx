import { NavbarMenu } from "../molecules/navbarMenu";
import { Logo } from "../molecules/headerLogo";
import styles from './navbar.module.css'

function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Logo/>
            <NavbarMenu/>
        </nav>
    )
}

export {Navbar}