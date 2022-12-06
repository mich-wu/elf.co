import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    // <div className={styles.footer}>
    //   <div className={styles.links}>
    //     <p className={styles.footerList}>
    //       <Link to='/secretsanta'>SECRET SANTA</Link>
    //     </p>
    //     <p className={styles.footerList}>
    //       <Link to='/onlypeets'>ONLY PEETS</Link>
    //     </p>
    //     <p className={styles.footerList}>
    //       <Link to='/drinks'>DRUNK SANTA</Link>
    //     </p>
    //   </div>

    <p className={styles.created}>
      © Elf.CO 2022. Created by James, Michelle, Manuela, Michaela, Jessie,
      Eleanor and Cameron.
    </p>

    /* <div className={styles.copyright}>
        <h2>© Elf.co 2022</h2>
        <p>Images courtesy of Becky Lazarević.</p>
      </div> */
    // </div>
  )
}
