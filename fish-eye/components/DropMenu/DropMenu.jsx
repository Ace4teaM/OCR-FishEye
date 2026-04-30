"use client"

import { useEffect, useState } from 'react';
import styles from './DropMenu.module.css';
import { v4 as uuidv4 } from "uuid";
import { ChevronUp, ChevronDown } from "lucide-react";


/**
 * @param {string} menuId - Identifiant unique du menu
 * @param {object[]} items - Liste des items [{ title: string, action:string|callback }, ...]
 * @param {boolean} overlay - Indique si le menu doit passer par-dessus le contenu ou en faire partie (redimentionne la hauteur)
 * @param {string} initial - Item initialement sélectionné (title)
 * @param {(value: string) => void | undefined} onSelected - Changement de sélection (value = item.title)
 */
const DropMenu = (
  {
    menuId = uuidv4(),
    items = [
      { title: "Popularité", action: "#" },
      { title: "Date", action: "#" },
      { title: "Titre", action: "#" }
    ],
    overlay = true,
    initial = "Popularité",
    onSelected = undefined
  }
) => {

  const [selected, setSelected] = useState(initial);

  const _onSelected = (value) => {
    setIsOpen(false)
    setSelected(value)
    onSelected?.(value)
  };

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header} role="button" aria-expanded={isOpen} aria-label={isOpen ? "Ouvrir le menu" : "Fermer le menu"}>
          <ul className={!isOpen ? `${styles.list} ${styles.collapsed}` : `${styles.list}`}>
              <li onClick={()=>{setIsOpen(!isOpen)}}>
                <a href="#">{items.find(item => item.title === selected).title ?? ""}</a>
              </li>
          </ul>
          {isOpen 
            ?<ChevronUp className={styles.icon} size={24} color="white" onClick={()=>{setIsOpen(false)}} />
            : <ChevronDown className={styles.icon} size={24} color="white" onClick={()=>{setIsOpen(true)}} />
          }
        </div>
        {isOpen &&
        <div className={styles.menu}>
          <ul role="menu" className={overlay ? `${styles.dropdown} ${styles.list}` : `${styles.dropdown} ${styles.list} ${styles.relative}`}>
          {items.filter((v)=>v.title != selected).map((item, index) => 
            <li role="menuitem" key={`${menuId}-item-${index}`} onClick={(e)=>_onSelected(item.title)}>
              <a aria-label={item.title} href={typeof item.action === "string" ? item.action : "#"}>{item.title}</a>
            </li>
          )}
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default DropMenu;
