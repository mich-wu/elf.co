import React, { useEffect, useState } from 'react'

import { getPeets } from '../apiClient/peets'
import Spinner from '../components/Spinner'
// import peets from '../data/peets'
import styles from './Gallery.module.scss'

export default function GalleryPage() {
  const [peets, setPeets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPeets()
      .then((peets) => {
        setPeets(peets)
        setLoading(false)
      })

      .catch((e) => console.error(e))
  }, [])
  console.log(peets)

  if (loading) {
    return (
      <div className={styles.spinner}>
        <Spinner loading={loading} />
      </div>
    )
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h1> PEETS</h1>
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
        </ul>
      </div>
      <div className={styles.littleguys}>
        <img
          className={styles.reindeer}
          src={'server/public/assets/rudolph-v2.png'}
          alt='reindeer-guy'
        />
        <img
          className={styles.meow}
          src={'server/public/meow-guy.png'}
          alt='meow-guy'
        />
      </div>
    </>
  )
}
