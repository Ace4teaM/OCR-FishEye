"use client"

import { useEffect } from 'react';
import styles from './Banner.module.css';
import Link from 'next/link'
 

/**
 * @param {string} title - Titre
 */
const Banner = ({
  title = "Nos photographes"
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/"><img src="/logo.png" height={40} alt="logo"></img></Link>
        {title && <h1>{title}</h1>}
      </div>
    </div>
  )
}

export default Banner;
