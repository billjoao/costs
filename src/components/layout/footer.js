import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2025</p>
        </footer>
    )
}

export default Footer