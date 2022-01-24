import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faQuestion } from '@fortawesome/free-solid-svg-icons'
export default function Faq(props){
    return(
        <section className={styles.section}>
            <div className={styles.areaTitle}>
                <FontAwesomeIcon className={styles.icon} icon={faQuestion}/>
                <h2 className={styles.title}>Frequently asked questions</h2>
            </div>

            <ul className={styles.faq}>
                <li className={styles.item}>
                    <header className={styles.questionHeader}>
                        <h5 className={styles.title}>This is a question?</h5>
                        <div className={styles.areaIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
                        </div>    
                    </header>
                    <p className={styles.response}>lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ut quaerat obcaecati commodi optio autem ipsum perferendis dolorem laboriosam beatae explicabo blanditiis facere expedita voluptatem, illo aliquam aspernatur facilis in.</p>
                </li>
                <li className={`${styles.active} ${styles.item}`}>
                    <header className={styles.questionHeader}>
                        <h5 className={styles.title}>This is a question?</h5>
                        <div className={styles.areaIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
                        </div>    
                    </header>
                    <p className={styles.response}>lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ut quaerat obcaecati commodi optio autem ipsum perferendis dolorem laboriosam beatae explicabo blanditiis facere expedita voluptatem, illo aliquam aspernatur facilis in.</p>
                </li>
                <li className={styles.item}>
                    <header className={styles.questionHeader}>
                        <h5 className={styles.title}>This is a question?</h5>
                        <div className={styles.areaIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
                        </div>    
                    </header>
                    <p className={styles.response}>lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ut quaerat obcaecati commodi optio autem ipsum perferendis dolorem laboriosam beatae explicabo blanditiis facere expedita voluptatem, illo aliquam aspernatur facilis in.</p>
                </li>
            </ul>
        </section>
    )
}