import React from 'react'
import getImageUrl from "../../utils";
import styles from './Footer.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram'
const Footer = () => {
  return (
    <footer className={styles.banner}>
      <div className={styles.iconBox}>        
        <MailOutlineIcon  sx={{ fontSize: 52 }} />
        <LinkedInIcon  sx={{ fontSize: 50 }} />
        <InstagramIcon  sx={{ fontSize: 48 }} />
        <XIcon  sx={{ fontSize: 45 }} />
      </div>
      <h1 className={styles.skillTitle}>Made With ❣️©️AmanSharma2024 </h1>
    </footer>
  )
}

export default Footer