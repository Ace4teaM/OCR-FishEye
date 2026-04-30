"use client"

import { useEffect, useState, useRef, useContext } from 'react';
import { StatesContext } from '@/contexts/StatesContext.jsx';
import DropMenu from '@/components/DropMenu/DropMenu.jsx';
import styles from './MediaDropMenu.module.css';


const MediaDropMenu = () => {

  const thisRef = useRef(null);

  const { sortMode, setSortMode } = useContext(StatesContext);

  useEffect(() => {
    if (!thisRef.current) return;

    setSelected(sortMode);
  }, [sortMode]);

  return (
    <DropMenu
      ref={thisRef}
      items = {[
        { title: "Popularité", action: "#" },
        { title: "Date", action: "#" },
        { title: "Titre", action: "#" }
      ]}
      overlay = {true}
      initial = {sortMode}
      onSelected = {setSortMode}
    ></DropMenu>
  )
}

export default MediaDropMenu;
