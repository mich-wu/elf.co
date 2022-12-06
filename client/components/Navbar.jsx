import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <div className={styles.title}>ELF.CO</div>
      </Link>
      <div className={styles.links}>
        <button className={styles.signup}>
          <Link to='/'>HOME</Link>
        </button>
        <button className={styles.login}>
          <Link to='/dashboard'>DASHBOARD</Link>
        </button>
      </div>
    </nav>
  )
}
