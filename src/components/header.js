import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'

import logoImg from '../assets/logo.png';

const Header = () => {

  return (
    <header className={styles.outerContainer}>
      <Link to={`/recipes`} style={{textDecoration: 'none'}}>
        <div className={styles.logoBg} id='logo'>
          <img src={logoImg} className={styles.logo} alt='Recipe Pal Logo' />
          <h6 className={styles.headerTxt}>Recipe Pal</h6>
        </div>
      </Link>
        <div>
            <nav className={styles.navLinks}>
                <Link to={`/recipes`} className={styles.headerLink}>Recipes</Link>
                <Link to={`/recipes`} className={styles.headerLink}>Search</Link>
                <Link to={`/recipes`} className={styles.headerLink}>About Us</Link>
                <Link to={`/recipes`} className={styles.headerLink}>Contact Us</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header;