"use client"

import { useEffect } from 'react';
import Card from "@/components/Card/Card.jsx";
import styles from './CardGrid.module.css';

/**
 * @param {Array} items - Liste des cards [{ image, name, text, location }, ...]
 */
const CardGrid =  (
  {
    items = [
      { 
        image : "EllieRoseWilkens.jpg",
        name : "Ellie-Rose Wilkens",
        tagline : "Capturer des compositions complexes",
        city : "Paris",
        country : "France"
      },
      { 
        image : "RhodeDubois.jpg",
        name : "Rhode Dubois",
        tagline : "Je crée des souvenirs",
        city : "Barcelona",
        country : "Spain"
      },
      { 
        image : "NabeelBradford.jpg",
        name : "Nabeel Bradford",
        tagline : "Toujours aller de l'avant",
        city : "Mexico City",
        country : "Mexico"
      },
      { 
        image : "MimiKeel.jpg",
        name : "Mimi Keel",
        tagline : "Voir le beau dans le quotidien",
        city : "London",
        country : "UK"
      },
      { 
        image : "MarcelNikolic.jpg",
        name : "Marcel Nikolic",
        tagline : "Toujours à la recherche de LA photo",
        city : "Berlin",
        country : "Germany"
      },
      { 
        image : "TracyGalindo.jpg",
        name : "Tracy Galindo",
        tagline : "Photographe freelance",
        city : "Montreal",
        country : "Canada"
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
          <Card key={`cardgrid-item-${index}`} {...item}></Card>
        )}
      </div>
    </div>
  )
}

export default CardGrid;
