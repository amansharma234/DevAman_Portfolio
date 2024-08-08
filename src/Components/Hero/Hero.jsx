import React from 'react'
import styles from './Hero.module.css'
import getImageUrl from '../../utils'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Hero = () => {
  return (
    <>
    <section className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={getImageUrl('hero/heroImage.png')} alt="heroImage" className={styles.heroImage} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>Aman Sharma</h1>
          <div className={styles.callToAction}> 
            <h4 className={styles.subtitle}>Want to connect?</h4>  
            <button className={styles.callToActionBtn}>Contact Me</button>           
          </div>
          <p className={styles.description}>I am a React.Js Developer, Specialized in delivering Robust and Responsive React Applications.</p>    
          <div className={styles.colorBtnContainer}>
            <div className={styles.colorBtnContainer2}>
              <button className={styles.colorBtn1}>Resume</button>
            <button className={styles.colorBtn2}>Projects</button>
            </div>
            <div className={styles.colorBtnContainer2}>
              <button className={styles.colorBtn3}>Skills</button>
            <button className={styles.colorBtn4}>About Me</button>
            </div>           
          </div>
        </div>      
    </section>
    <div className={styles.banner}>
    <div className={styles.bannerItems}>
      <div className={styles.bannerTitle}>
        <MailOutlineIcon  sx={{ fontSize: 50 }}/>
        <a  target='blank' href="mailto:amandeveloper234@gmail.com"><h2>Email</h2></a>        
      </div>      
      
    </div>
    <div className={styles.bannerItems}>
      <div className={styles.bannerTitle}>
        <GitHubIcon  sx={{ fontSize: 48 }}/>
        <a target='blank' href="https://github.com/amansharma234"><h2>Github</h2></a>        
      </div>
    </div>
    <div className={styles.bannerItems}>
      <div className={styles.bannerTitle}>
        <LinkedInIcon  sx={{ fontSize: 45 }}/>
        <a target='blank' href="https://www.linkedin.com/in/amansharma234/"><h2>LinkedIn</h2></a>
      </div>  
      
    </div>
    <div className={styles.bannerItems}>
      <div className={styles.bannerTitle}>
        <XIcon  sx={{ fontSize: 40 }}/>
        <a target='blank' href="https://x.com/aman_dev234"><h2>X/Twitter</h2></a>
      </div>      
    </div>
  </div>
  </>
  )
}

export default Hero