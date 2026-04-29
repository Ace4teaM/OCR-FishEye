"use client"

import { useEffect, useContext } from 'react';
import styles from './CardLarge.module.css';
import { StatesContext } from '@/contexts/StatesContext.jsx';

/**
 * @param {int} id - Identifiant du profile
 * @param {string} portrait - Chemin vers l'image de profile
 * @param {string} name - Nom et prénom
 * @param {string} text - Citation
 * @param {string} location - La ville
 */
const CardLarge = (
  {
    id = 930,
    portrait = "EllieRoseWilkens.jpg",
    name = "Ellie-Rose Wilkens",
    tagline = "Capturer des compositions complexes",
    city = "Paris",
    country = "France"
  }
) => {

  const { showContactModal } = useContext(StatesContext);

  useEffect(() => {
    console.log(`Card mounted`)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.photo}>
          <img src={`/${portrait}`} alt=""></img>
        </div>
        <button className={`button ${styles.contact}`} onClick={()=>showContactModal({from:name})}>
          Contactez-moi
        </button>
        <div className={styles.title}>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.location}>{city}, {country}</div>
          <div className={styles.text}>{tagline}</div>
        </div>
      </div>
    </div>
  )
}

export default CardLarge;
