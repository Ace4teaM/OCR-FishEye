"use client"

import { useEffect } from 'react';
import styles from './Card.module.css';

/**
 * @param {string} image - Chemin vers l'image de profile
 * @param {string} name - Nom et prénom
 * @param {string} text - Citation
 * @param {string} location - La ville
 */
const Card = (
  {
    image = "EllieRoseWilkens.jpg",
    name = "Ellie-Rose Wilkens",
    tagline = "Capturer des compositions complexes",
    city = "Paris",
    country = "France"
  }
) => {

  useEffect(() => {
    console.log(`Card mounted`)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.photo}>
          <img src={`/${image}`} alt="Photo de profile"></img>
        </div>
        <button className={`button ${styles.contact}`}>Contactez-moi</button>
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          <div className={styles.location}>{city}, {country}</div>
          <div className={styles.text}>{tagline}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
