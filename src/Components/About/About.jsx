import React from 'react'
import getImageUrl from '../../utils'
import styles from './About.module.css'
import aboutData from '../../data/about.json'

const About = () => {
  return (
    <section id='aboutMe' className={styles.container}> 
    <div className={styles.banner}>
        <h4>“Interested?
         <span className={styles.text}>
          <a href="mailto:amandeveloper234@gmail.com">amandeveloper234@gmail.com</a>
         </span>"
        </h4>
      </div>
      <h1 className={styles.name}>About me</h1>   
      {aboutData.map((about, index) => (
        <div key={index} className={styles.aboutItem}>
          <img src={getImageUrl(about.image)} alt={about.altText} className={styles.aboutImage} />
          <div className={styles.aboutInfo}>
            <h4 className={styles.aboutTitle}>{about.title}</h4>
            <p className={styles.aboutDescription}>{about.description}</p>
          </div>
        </div>
      ))}
      
    </section>
  )
}

export default About