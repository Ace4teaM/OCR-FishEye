
"use client"

import { useContext } from 'react';
import Media from "@/components/Media/Media.jsx";
import styles from './MediaGrid.module.css';
import { StatesContext } from '@/contexts/StatesContext.jsx';

/**
 * @param {Array} medias - Liste des medias [{ id, photographerId, title, image, .... }, ...]
 */
const MediaGrid = (
  {
    medias = [
         {
          id: 1,
          photographerId: 82,
          title: 'Fashion Yellow Beach',
          image: 'Fashion_Yellow_Beach.jpg',
          video: null,
          likes: 62,
          date: '2011-12-08',
          price: 55
        },
        {
          id: 2,
          photographerId: 82,
          title: 'Fashion Urban Jungle',
          image: 'Fashion_Urban_Jungle.jpg',
          video: null,
          likes: 11,
          date: '2011-11-06',
          price: 55
        },
        {
          id: 3,
          photographerId: 82,
          title: 'Wooden sculpture of a horse',
          image: null,
          video: 'Art_Wooden_Horse_Sculpture.mp4',
          likes: 24,
          date: '2011-12-08',
          price: 100
        }
    ]
  }) => {

  const { sortMode, showCarrouselModal } = useContext(StatesContext);

  // tri sur les medias
  medias.sort((a, b) => {
    switch (sortMode) {
      case "Date":
        return new Date(b.date) - new Date(a.date);
      case "Titre":
        return a.title.localeCompare(b.title);
      case "Popularité":
      default:
        return b.likes - a.likes;
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      {medias.map((media, index)=>
        <Media key={`media-${media.id}`} {...media} onClick={()=>showCarrouselModal({medias:medias, initialIndex:index})}></Media>
      )}
      </div>
    </div>
  )
}

export default MediaGrid;
