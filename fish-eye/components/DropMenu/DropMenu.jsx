"use client"

import { useEffect, useState } from 'react';
import styles from './DropMenu.module.css';
import { v4 as uuidv4 } from "uuid";
import { ChevronUp, ChevronDown } from "lucide-react";


/**
 * @param {string} menuId - Identifiant unique du menu
 * @param {Array} items - Liste des items [{ title: string, action:string|callback }, ...]
 */
const DropMenu = (
  {
    menuId = uuidv4(),
    items = [
      { title: "Popularité", action: "#" },
      { title: "Date", action: "#" },
      { title: "Titre", action: "#" }
    ]
  }
) => {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log(`DropMenu mounted`)
    console.log(items.length)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <ul className={!isOpen ? `${styles.list} ${styles.listCollapsed}` : `${styles.list}`}>
          {items.slice(0, isOpen ? items.length : 1).map((item, index) => 
            index == 0 ?
              <li key={`${menuId}-item-${index}`} onClick={()=>{setIsOpen(!isOpen)}}>
                <a href="#">{item.title}</a>
              </li>
              :
              <li key={`${menuId}-item-${index}`}>
                <a href={typeof item.action === "string" ? item.action : "#"}>{item.title}</a>
              </li>
          )}
          </ul>
          {isOpen 
            ?<ChevronUp className={styles.icon} size={24} color="white" onClick={()=>{setIsOpen(false)}} />
            : <ChevronDown className={styles.icon} size={24} color="white" onClick={()=>{setIsOpen(true)}} />
          }
        </div>
      </div>
    </div>
  )
}

export default DropMenu;
