import React from 'react'
import { Link } from 'react-router-dom'

import styles from './SSHome.module.scss'

const SSHome = () => {
  return (
    <div className={styles.SSHomeContainer}>
      <a href='/event'>
        <h1>SECRET SANTA</h1>
        <img
          src='../../server/public/assets/Secret-Santa-.png'
          alt='secret santa'
          className={styles.image}
        />
      </a>

      <Link to='/event' className={styles.links}>
        LET{"'"}S GET STARTED!
      </Link>
    </div>
  )
}

export default SSHome
