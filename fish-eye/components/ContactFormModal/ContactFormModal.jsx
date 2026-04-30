"use client"

import styles from './ContactFormModal.module.css';
import { X } from "lucide-react";
import { useEffect, useState, useRef, useId, useContext } from 'react';
import { StatesContext } from '@/contexts/StatesContext.jsx';

/**
 * @param {string} firstname - Champ du formulaire
 * @param {string} lastname - Champ du formulaire
 * @param {string} email - Champ du formulaire
 * @param {string} message - Champ du formulaire
 */
const ContactFormModal = (
  {
    from = "Ellie Rose",
    firstname = "Dupont",
    lastname = "Albert",
    email = "dupont.albert@myamil.com",
    message = "My message\nmultilines"
  }
) => {

  const { currentModal, hideModal } = useContext(StatesContext);

  const id = useId();

  const dialogRef = useRef(null);


  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (currentModal === "contact") {
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
      <div className={styles.title}>
        <h2>Contactez-moi</h2>
        <div>{from}</div>
      </div>
      <form className={styles.content} method="dialog">
        <label htmlFor={`${id}--firstName`}>Prénom</label>
        <input id={`${id}--firstName`} name="firstname" type="text" value={firstname}></input>
        <label htmlFor={`${id}--lastname`}>Nom</label>
        <input id={`${id}--lastname`} name="lastname" type="text" value={lastname}></input>
        <label htmlFor={`${id}--email`}>Email</label>
        <input id={`${id}--email`} name="email" type="email" value={email}></input>
        <label htmlFor={`${id}--message`}>Votre message</label>
        <textarea id={`${id}--message`} name="message" rows={6} value={message}></textarea>
        <button className="button" type="submit">Envoyer</button>
      </form>
      <X className={styles.icon} size={42} color="white" onClick={()=>{hideModal()}} />
    </dialog>
  )
}

export default ContactFormModal;
