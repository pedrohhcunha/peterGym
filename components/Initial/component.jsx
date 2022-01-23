import styles from './styles.module.scss'

export default function Initial(props){
    return(
        <section className={styles.section}>
            <div className={styles.contentArea}>
                <h1 className={styles.title}>Get the best part of your day <strong>– you fit here</strong></h1>
                <p className={styles.subTitle}>We provide serious fitness but within a fun and friendly, safe space.</p>
                <div className={styles.areaButtons}>
                    <button className={styles.button}>Start today</button>
                    <button className={styles.button}>Learn more</button>
                </div>
            </div>
        </section>
    )
}