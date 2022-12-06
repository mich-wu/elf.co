// import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

// import { IfAuthenticated, IfNotAuthenticated } from './isAuthenticated'
import styles from './Navbar.module.scss'

export default function Navbar() {
  // const { logout, loginWithRedirect, user } = useAuth0()

  // const handleLogOff = (e) => {
  //   e.preventDefault()
  //   logout()
  // }

  // const handleSignIn = (e) => {
  //   e.preventDefault()
  //   loginWithRedirect()
  // }

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
        {/* <button className={styles.signup}>
          <Link to='/'>SIGN UP</Link>
        </button> */}

        {/* <IfAuthenticated>
          <div className={styles.auth}>
            <div>Hello {user?.nickname}</div>
            <div>
              <Link to='/' onClick={handleLogOff} >
                Sign out
              </Link>
            </div>
          </div>
        </IfAuthenticated> */}

        {/*  <IfNotAuthenticated>
          <Link className={styles.auth} to='/' onClick={handleSignIn}>
            Register | Login
          </Link>
        </IfNotAuthenticated> */}
      </div>
    </nav>
  )
}
