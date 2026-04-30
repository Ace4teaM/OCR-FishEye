"use client"

import styles from './ContactFormModal.module.css';
import { X } from "lucide-react";
import { useEffect, useState, useRef, useId, useContext } from 'react';
import { StatesContext } from '@/contexts/StatesContext.jsx';
import { handleKeyboardAction } from '@/utils/accessibility';

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

  const [_firstname, setFirstname] = useState(firstname);
  const [_lastname, setLastname] = useState(lastname);
  const [_email, setEmail] = useState(email);
  const [_message, setMessage] = useState(message);


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
        <input id={`${id}--firstName`} required aria-required={true} name="firstname" type="text" value={_firstname} onChange={(e) => setFirstname(e.target.value)}></input>
        <label htmlFor={`${id}--lastname`}>Nom</label>
        <input id={`${id}--lastname`} required aria-required={true} name="lastname" type="text" value={_lastname} onChange={(e) => setLastname(e.target.value)}></input>
        <label htmlFor={`${id}--email`}>Email</label>
        <input id={`${id}--email`} required aria-required={true} name="email" type="email" value={_email} onChange={(e) => setEmail(e.target.value)}></input>
        <label htmlFor={`${id}--message`}>Votre message</label>
        <textarea id={`${id}--message`} required aria-required={true} name="message" rows={6} value={_message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className="button" type="submit">Envoyer</button>
      </form>
      <X tabIndex="0" role="button" aria-label='Fermer le formulaire de contact' className={styles.icon} size={42} color="white" onKeyDown={handleKeyboardAction(hideModal)} onClick={hideModal} />
    </dialog>
  )
}

export default ContactFormModal;
