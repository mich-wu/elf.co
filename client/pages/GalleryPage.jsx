import React, { useEffect, useState } from 'react'

import peets from '../data/peets'
import styles from './Gallery.module.css'

export default function GalleryPage() {
  return (
    <>
      <h1> Peets 🐾 </h1>

      <div className={styles['wrapper']}>
        {peets.map((peet) => {
          return (
            <div key={peet.id} className={styles.item}>
              <div className={styles.polaroid}>
                <img src={peet.image} alt='dog' />
                <div className={styles['caption']}>
                  <p>{peet.owner}</p>
                  <p>{peet.petname}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
