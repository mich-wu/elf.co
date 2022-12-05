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
      {/* <h1> Peets 🐾 </h1> */}
      <ul className={styles.grid}>
        {peets.map((peet) => {
          return (
            <li key={peet.id}>
              <figure className={styles.grid__figure}>
                <img src={`/images/${peet.image}`} alt='doggo' />
                <figcaption>{peet.petname}</figcaption>
              </figure>
            </li>
          )
        })}

        <img
          className={styles.reindeer}
          src={'server/public/reindeer-guy.png'}
          alt='reindeer-guy'
        />
        <img
          className={styles.meow}
          src={'server/public/meow-guy.png'}
          alt='reindeer-guy'
        />
      </ul>
    </>
  )
}
