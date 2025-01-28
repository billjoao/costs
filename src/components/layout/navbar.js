import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <Container>
            <nav className={styles.navbar}>  
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>  
                    <li className={styles.item}>  
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>  
                        <Link to="/Projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>  
                        <Link to="/Company">Company</Link>
                    </li>
                    <li className={styles.item}>  
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

export default Navbar
