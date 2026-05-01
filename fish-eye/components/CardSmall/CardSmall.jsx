"use client"

import { useEffect } from 'react';
import styles from './CardSmall.module.css';
import Link from 'next/link'
 
/**
 * @param {int} id - Identifiant du profile
 * @param {string} portrait - Chemin vers l'image de profile
 * @param {string} name - Nom et prénom
 * @param {string} text - Citation
 * @param {string} location - La ville
 * @param {integer} price - Taux journalier en euros
 */
const CardSmall = (
  {
    id = 930,
    portrait = "EllieRoseWilkens.jpg",
    name = "Ellie-Rose Wilkens",
    tagline = "Capturer des compositions complexes",
    city = "Paris",
    country = "France",
    price = 100
  }
) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.link} href={`/photograph/${id}`} aria-label={`Visiter la galerie de ${name}`}>
          <div className={styles.photo}>
            <img src={`/${portrait}`} alt={name}></img>
          </div>
          <h2 className={styles.name}>{name}</h2>
        </Link>
        <div className={styles.title}>
          <div className={styles.location}>{city}, {country}</div>
          <div className={styles.text}>{tagline}</div>
          <div className={styles.price}>{price}€/jour</div>
        </div>
      </div>
    </div>
  )
}

export default CardSmall;
