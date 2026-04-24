"use client"

import { useEffect } from 'react';
import styles from './Media.module.css';
import { Heart } from "lucide-react";
import {Plyr} from "plyr-react"
import "plyr-react/plyr.css"

/**
 * @param {int} id - Identifiant
 * @param {string} title - Titre
 * @param {string} image - Chemin vers le fichier image
 * @param {string} video - Chemin vers le fichier vidéo
 * @param {string} likes - Nombre de like
 */
const Media = (
  {
    id = 56,
    image = "Travel_Bike_and_Stair.jpg",
    title = "Travel Bike and Stair",
    likes = 15,
    video = null
  }
) => {

  // Player source configuration
  const plyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: video,
          type: "video/mp4",
          size: 720,
        },
      ]
    },
    options: {
      // Full list of options: https://github.com/sampotts/plyr#options
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
    },
  }
 //         <Plyr {...plyrProps} />

  useEffect(() => {
    console.log(`Picture mounted`)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {image ? <div className={styles.picture}>
          <img src={`/${image}`}></img>
        </div>
        : video ? <div className={styles.video}>
          <video controls playsInline>
            <source src={`/${video}`} type="video/mp4" />
          </video>
        </div>
        : <div className={styles.empty}>Empty</div>
        }
        <div className={styles.footer}>
          <div className={styles.text}>{title}</div>
          <div>{likes} <Heart className={styles.icon}></Heart></div>
        </div>
      </div>
    </div>
  )
}

export default Media;
