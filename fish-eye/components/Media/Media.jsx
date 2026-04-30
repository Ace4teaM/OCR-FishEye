"use client"

import { useEffect } from 'react';
import styles from './Media.module.css';
import { Heart } from "lucide-react";
import { likeMedia } from '@/app/actions.js';
import { handleKeyboardAction } from '@/utils/accessibility';

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
        <div tabIndex={0} onKeyDown={handleKeyboardAction(clickMedia)} onClick={clickMedia}>
          {image ? <div className={styles.picture}>
            <img src={`/${image}`} alt={title}></img>
          </div>
          : video ? <div className={styles.video}>
            <video>
              <source src={`/${video}`} type="video/mp4" />
            </video>
          </div>
          : <div className={styles.empty}>Empty</div>
          }
        </div>
        <div className={styles.footer}>
          <div className={styles.text}>{title}</div>
          <div tabIndex={0} onKeyDown={handleKeyboardAction(clickLike)} onClick={clickLike}>{likes} <Heart className={styles.icon}></Heart></div>
        </div>
      </div>
    </div>
  )
}

export default Media;
