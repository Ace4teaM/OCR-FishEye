"use client"

import { useEffect } from 'react';
import CardSmall from "@/components/CardSmall/CardSmall.jsx";
import styles from './CardGrid.module.css';

/**
 * @param {Array} items - Liste des cards [{ image, name, text, location }, ...]
 */
const CardGrid =  (
  {
    items = [
      { 
        portrait : "EllieRoseWilkens.jpg",
        name : "Ellie-Rose Wilkens",
        tagline : "Capturer des compositions complexes",
        city : "Paris",
        country : "France"
      },
      { 
        portrait : "RhodeDubois.jpg",
        name : "Rhode Dubois",
        tagline : "Je crée des souvenirs",
        city : "Barcelona",
        country : "Spain"
      },
      { 
        portrait : "NabeelBradford.jpg",
        name : "Nabeel Bradford",
        tagline : "Toujours aller de l'avant",
        city : "Mexico City",
        country : "Mexico"
      },
      { 
        portrait : "MimiKeel.jpg",
        name : "Mimi Keel",
        tagline : "Voir le beau dans le quotidien",
        city : "London",
        country : "UK"
      },
      { 
        portrait : "MarcelNikolic.jpg",
        name : "Marcel Nikolic",
        tagline : "Toujours à la recherche de LA photo",
        city : "Berlin",
        country : "Germany"
      }
    ]
  }
) => {

  useEffect(() => {
    console.log(`CardGrid mounted`)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {items.map((item, index)=>
          <CardSmall key={`cardgrid-item-${index}`} {...item}></CardSmall>
        )}
      </div>
    </div>
  )
}

export default CardGrid;
