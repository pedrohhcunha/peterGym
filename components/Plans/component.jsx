import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Plans(props){
    return(
        <section className={styles.section}>
            <div className={styles.areaTitle}>
                <FontAwesomeIcon className={styles.icon} icon={faDollarSign}/>
                <h2 className={styles.title}>Our mission</h2>
            </div>
            <div className={styles.plans}>
                <div className={styles.plan}>
                    <h4 className={styles.name}>Basic</h4>
                    <h5 className={styles.price}>25<strong>$</strong></h5>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>Unlimited gym acess</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1 training programs</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>Free fitness consultation</span>
                        </li>
                    </ul>
                    
                    <button className={styles.button}>Join now</button>
                </div>
                <div className={styles.plan}>
                    <h4 className={styles.name}>Basic</h4>
                    <h5 className={styles.price}>25<strong>$</strong></h5>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>Unlimited gym acess</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1 training programs</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>Free fitness consultation</span>
                        </li>
                    </ul>
                    
                    <button className={styles.button}>Join now</button>
                </div>
                <div className={styles.plan}>
                    <h4 className={styles.name}>Basic</h4>
                    <h5 className={styles.price}>25<strong>$</strong></h5>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>Unlimited gym acess</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1 training programs</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>Free fitness consultation</span>
                        </li>
                    </ul>
                    
                    <button className={styles.button}>Join now</button>
                </div>
            </div>
        </section>
    )
}