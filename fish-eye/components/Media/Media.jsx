"use client"

import { useEffect } from 'react';
import styles from './Media.module.css';
import { Heart } from "lucide-react";
import { likeMedia } from '@/app/actions.js';

/**
 * @param {int} id - Identifiant
 * @param {string} image     - Chemin vers le fichier image
 * @param {string} title     - Titre
 * @param {string} likes     - Nombre de likes
 * @param {string} video     - Chemin vers le fichier vidéo
 * @param {function} onClick - Fonction à appeler au clic sur le media
 */
const Media = (
  {
    id = 56,
    image = "Travel_Bike_and_Stair.jpg",
    title = "Travel Bike and Stair",
    likes = 15,
    video = null,
    onClick = () => {}
  }
) => {

  useEffect(() => {
    console.log(`Picture mounted`)
  }, [])

  const clickMedia = (e) => {
    e.preventDefault();
    onClick()
  }

  const clickLike = async (e) => {
    e.preventDefault();
    await likeMedia(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {image ? <div className={styles.picture} onClick={clickMedia}>
          <img src={`/${image}`}></img>
        </div>
        : video ? <div className={styles.video} onClick={clickMedia}>
          <video>
            <source src={`/${video}`} type="video/mp4" />
          </video>
        </div>
        : <div className={styles.empty}>Empty</div>
        }
        <div className={styles.footer}>
          <div className={styles.text}>{title}</div>
          <div>{likes} <Heart className={styles.icon} onClick={clickLike}></Heart></div>
        </div>
      </div>
    </div>
  )
}

export default Media;
