import styles from './styles.module.scss'
import Link from 'next/link'

export default function Footer(props){
    return(
        <footer className={styles.footer}>
            <h6 className={styles.logo}>Peter<strong>Gym</strong></h6>
            <Link href="https://google.com/" target="_blank">
                <a className={styles.link}>
                    All rights reserverd.
                </a>
            </Link>
        </footer>
    )
}