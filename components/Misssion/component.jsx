import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Mission(props){
    return(
        <section className={styles.section}>
            <div className={styles.areaTitle}>
                <FontAwesomeIcon className={styles.icon} icon={faUsers}/>
                <h2 className={styles.title}>Our mission</h2>
            </div>
            <p className={styles.paragraph}>
                We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.
                <br /><br />
                The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.
            </p>
            <div className={styles.link}>
                <span className={styles.text}>Join now</span>
                <div className={styles.areaIcon}>
                    <FontAwesomeIcon className={styles.icon} icon={faAngleRight}/>
                </div>
            </div>
        </section>
    )
}