import React from 'react';
import getImageUrl from '../../utils';
import styles from './Skills.module.css';
import skillsData from '../../data/skills.json';

const Skills = () => {
  return (
    <section id='skills'>
      <img src={getImageUrl("banner/quotes.png")} alt="" className={styles.quotes} />
      <div className={styles.banner}>
        <h4>“ The work of a Creative person awaits the right audience. "</h4>
      </div>

      <div className={styles.container}>
        <h1 className={styles.name}>My Tech Stack</h1>

        <div className={styles.skillsContainer}>
          {skillsData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className={styles.skillTitle}>{section.title}</h4>
              <ul className={styles.skill}>
                {section.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillItem}>
                    <img src={getImageUrl(skill.image)} alt="logo" className={styles.logo} />
                    <button className={styles[`button${section.title.replace(' ', '')}`]}>{skill.name}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.info}>
          <h4 className={styles.skillTitle}>My Expertise</h4>
          <p>“I am really good at creating SPA (Single Page Application) and custom React Application. Building User friendly and accessible Frontend is what I really look to do”</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
