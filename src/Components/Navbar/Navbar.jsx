import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.css'
import getImageUrl from '../../utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className={styles.navbar}>
    <img src={getImageUrl('nav/logo.png')} alt="logo" className={styles.logo}/>
      <div className={styles.title}>        
        <h1>Aman Sharma</h1>
        <h4>Full-Stack Developer</h4>
      </div>
      <div>
      <button className={styles.navbtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen 
           ? <FontAwesomeIcon icon="fa-solid fa-xmark" />   
           : <FontAwesomeIcon icon="fa-solid fa-bars" />
        }
      </button> 
      </div>
      <ul className={`${styles.navItems} ${isOpen && styles.isOpen}`}>
        <li className={styles.navItem}><a href="">Resume <span className={styles.navlines}>|</span></a></li>
        <li className={styles.navItem}><a href="#projects">Projects <span className={styles.navlines}>|</span></a></li>
        <li className={styles.navItem}><a href="#skills">Skills <span className={styles.navlines}>|</span></a></li>
        <li className={styles.navItem}><a href="#aboutMe">About Me <span className={styles.navlines}></span></a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar