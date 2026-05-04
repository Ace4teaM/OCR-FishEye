"use client"

import { useEffect, useRef, useId, useState } from 'react';
import styles from './DropMenu.module.css';
import { ChevronUp, ChevronDown } from "lucide-react";
import { handleKeyboardAction } from '@/utils/accessibility';


/**
 * @param {object[]} items - Liste des items [{ title: string, action:string|callback }, ...]
 * @param {boolean} overlay - Indique si le menu doit passer par-dessus le contenu ou en faire partie (redimentionne la hauteur)
 * @param {string} initial - Item initialement sélectionné (title)
 * @param {(value: string) => void | undefined} onSelected - Changement de sélection (value = item.title)
 */
const DropMenu = (
  {
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

  const listRef = useRef(null)
  const headerRef = useRef(null)
  const triggerRef = useRef(null)
  const menuId = useId();

  const [selected, setSelected] = useState(initial);

  const _onSelected = (value) => {
    setIsOpen(false)
    setSelected(value)
    onSelected?.(value)
  };

  const [isOpen, setIsOpen] = useState(false)

  // Déplace automatiquement le focus
  useEffect(() => {
    if(isOpen === true)
    {
      listRef.current.querySelector('a').focus()
    }
    else if(isOpen === false)
    {
      headerRef.current.focus()
    }
  }, [isOpen])

  const handleMenuKeyboardActions = (event, item) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      _onSelected(item.title);
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevItem = event.currentTarget
        .closest('li')
        ?.previousElementSibling
        ?.querySelector('a')
    
      prevItem?.focus()
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextItem = event.currentTarget
        .closest('li')
        ?.nextElementSibling
        ?.querySelector('a')

      nextItem?.focus()
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}
          ref={headerRef} 
          tabIndex={0} 
          onKeyDown={handleKeyboardAction(()=>setIsOpen(!isOpen))} 
          onClick={()=>{setIsOpen(!isOpen)}} 
          role="combobox"
          aria-expanded={isOpen} 
          aria-haspopup="listbox" 
          aria-controls={menuId}
          aria-label={isOpen ? "Ouvrir le menu de tri" : "Fermer le menu de tri"}
        >
          <ul className={!isOpen ? `${styles.list} ${styles.collapsed}` : `${styles.list}`}>
              <li><span>{items.find(item => item.title === selected).title ?? ""}</span></li>
          </ul>
          {isOpen 
            ?<ChevronUp className={styles.icon} size={24} color="white" />
            : <ChevronDown className={styles.icon} size={24} color="white" />
          }
        </div>
        <div className={`${styles.menu} ${isOpen ? "" : styles.hidden}`} id={menuId}>
          <ul ref={listRef}  role="listbox" className={overlay ? `${styles.dropdown} ${styles.list}` : `${styles.dropdown} ${styles.list} ${styles.relative}`}>
          {items.filter((v)=>v.title != selected).map((item, index) => 
            <li role="option" tabIndex={-1} key={`${menuId}-item-${index}`} onKeyDown={(e)=>handleMenuKeyboardActions(e, item)} onClick={(e)=>_onSelected(item.title)}>
              <span><a aria-label={item.title} href={typeof item.action === "string" ? item.action : "#"}>{item.title}</a></span>
            </li>
          )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropMenu;
