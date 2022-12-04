import React, { useEffect, useState } from 'react'

import { getPeets } from '../apiClient/peets'
// import peets from '../data/peets'
import styles from './Gallery.module.scss'

export default function GalleryPage() {
  const [peets, setPeets] = useState([])

  useEffect(() => {
    getPeets()
      .then((peets) => {
        setPeets(peets)
      })
      .catch((e) => console.error(e))
  }, [])
  console.log(peets)

  return (
    <>
      <h1> Peets 🐾 </h1>
      <div className={styles['wrapper']}>
        {peets.map((peet) => {
          return (
            <div key={peet.id} className={styles.item}>
              <div className={styles.polaroid}>
                <img src={`/images/${peet.image}`} alt='dog' />
                <div className={styles['caption']}>
                  <p>Owner: {peet.owner}</p>
                  <p>Pet Name: {peet.petname}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
