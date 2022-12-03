import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className='image-wrapper'>
          <a href='/event'>
            <img src='../../server/public/secretSanta.png' alt='secret santa' />
          </a>
          <Link to='/event' className='links'>
            Secret Santa
          </Link>
        </div>
        <div className='image-wrapper'>
          <a href='/peets'>
            <img
              src='../../server/public/onlyPeets.png'
              alt='Santa with Animals'
              className={styles.image}
            />
          </a>
          <Link to='/peets' className={styles.links}>
            OnlyPeets
          </Link>
        </div>
        <div className='image-wrapper'>
          <a href='/drinks'>
            <img
              src='../../server/public/drunkSanta.png'
              alt='Drunk Santa'
              className={styles.image}
            />
          </a>
          <Link to='/drinks' className={styles.links}>
            Drunk Santa
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
