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
        text : "Capturer des compositions complexes",
        location : "Paris"
      },
      { 
        image : "RhodeDubois.jpg",
        name : "Rhode Dubois",
        text : "Je crée des souvenirs",
        location : "Barcelona"
      },
      { 
        image : "NabeelBradford.jpg",
        name : "Nabeel Bradford",
        text : "Toujours aller de l'avant",
        location : "Mexico City"
      },
      { 
        image : "MimiKeel.jpg",
        name : "Mimi Keel",
        text : "Voir le beau dans le quotidien",
        location : "London"
      },
      { 
        image : "MarcelNikolic.jpg",
        name : "Marcel Nikolic",
        text : "Toujours à la recherche de LA photo",
        location : "Germany"
      },
      { 
        image : "TracyGalindo.jpg",
        name : "Tracy Galindo",
        text : "Photographe freelance",
        location : "Canada"
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
