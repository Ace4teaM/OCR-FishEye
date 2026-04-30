"use client"

import styles from './MediaCarrouselModal.module.css';
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useId, useContext } from 'react';
import { StatesContext } from '@/contexts/StatesContext.jsx';
import { handleKeyboardAction } from '@/utils/accessibility';

/**
 * @param {Array} medias - Liste des medias [{ id, photographerId, title, image, .... }, ...]
 * @param {integer} initialIndex - Index de départ dans le carrousel
 */
const MediaCarrouselModal = (
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
    ],
    initialIndex = 0
  }) => {

  const { currentModal, hideModal } = useContext(StatesContext);

  const id = useId();

  const dialogRef = useRef(null);

  const [currentMediaIndex, setCurrentMediaIndex] = useState(initialIndex);

  const media = medias[currentMediaIndex];

  const nextMedia = () => {
    setCurrentMediaIndex((currentMediaIndex + 1) % medias.length);
  }

  const previousMedia = () => {
    setCurrentMediaIndex((currentMediaIndex - 1 + medias.length) % medias.length);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (currentModal === "carrousel") {
      dialog.showModal(); // Ouvre en mode modal (avec backdrop)
    } else {
      dialog.close();
    }
  }, [currentModal]); // Se déclenche chaque fois que le texte change

  return (
    <dialog
      className={styles.container}
      ref={dialogRef}
      // On écoute la fermeture via la touche Échap
      onClose={() => hideModal()}
      onClick={(e) => {
        // Fermeture au clic sur le backdrop
        if (e.target === dialogRef.current) hideModal();
      }}
    >
      <div className={styles.content}>
        {media && media.image ? <div className={styles.picture}>
            <img src={`/${media.image}`} alt={media.title}></img>
          </div>
          : media && media.video ? <div className={styles.video}>
            <video autoPlay controls playsInline>
              <source src={`/${media.video}`} type="video/mp4" />
            </video>
          </div>
          : <div className={styles.empty}>Empty</div>
          }
          <div className={styles.title}>{media.title ?? ""}</div>
      </div>
      <X tabIndex="0" role="button" aria-label='Fermer le carrousel' className={styles.icon} size={42} color="#901C1C" onKeyDown={handleKeyboardAction(hideModal)} onClick={hideModal} />
      <ChevronLeft tabIndex="0" role="button" aria-label='Média suivant' className={styles.leftIcon} size={42} color="#901C1C" onKeyDown={handleKeyboardAction(previousMedia)} onClick={previousMedia} />
      <ChevronRight tabIndex="0" role="button" aria-label='Média précédent' className={styles.rightIcon} size={42} color="#901C1C" onKeyDown={handleKeyboardAction(nextMedia)} onClick={nextMedia} />
    </dialog>
  )
}

export default MediaCarrouselModal;
