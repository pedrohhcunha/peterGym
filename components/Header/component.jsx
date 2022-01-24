import styles from './styles.module.scss'

export default function Header(props){
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>Peter<strong>Gym</strong></h1>
            <div className={styles.buttons}>
                <button className={styles.button}>Join now</button>
            </div>
        </header>
    )
}