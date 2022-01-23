import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import boxing from './images/boxing.png'
import { useState } from 'react'

export default function Services (props){

    const [traslateCarrossel, setTraslateCarrossel] = useState(0);


    return(
        <section className={styles.section}>
            <div className={styles.areaTitle}>
                <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt} />
                <h2 className={styles.title}>Services for you</h2>
            </div>
            <div className={styles.services}>
                <div style={{transform: `translateX(-${traslateCarrossel}px)`}} className={styles.carrossel}>
                    <div className={styles.service}>
                        <Image layout='fill' src={boxing} objectFit='cover'/>
                        <h4 className={styles.title}>Boxing</h4>
                    </div>
                    <div className={styles.service}>
                        <Image layout='fill' src={boxing} objectFit='cover'/>
                        <h4 className={styles.title}>Boxing</h4>
                    </div>
                    <div className={styles.service}>
                        <Image layout='fill' src={boxing} objectFit='cover'/>
                        <h4 className={styles.title}>Boxing</h4>
                    </div>
                    <div className={styles.service}>
                        <Image layout='fill' src={boxing} objectFit='cover'/>
                        <h4 className={styles.title}>Boxing</h4>
                    </div>
                    <div className={styles.service}>
                        <Image layout='fill' src={boxing} objectFit='cover'/>
                        <h4 className={styles.title}>Boxing</h4>
                    </div>
                    <div className={styles.service}>
                        <Image layout='fill' src={boxing} objectFit='cover'/>
                        <h4 className={styles.title}>Boxing</h4>
                    </div>
                </div>
            </div>
            <div className={styles.controllers}>
                <div onClick={() => setTraslateCarrossel(traslateCarrossel - 270)} className={styles.controller}>
                    <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
                </div>
                <div onClick={() => setTraslateCarrossel(traslateCarrossel + 270)} className={styles.controller}>
                    <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
                </div>
            </div>
        </section>
    )
}