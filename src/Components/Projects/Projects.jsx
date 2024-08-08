import React from 'react';
import getImageUrl from '../../utils';
import styles from './Projects.module.css';
import projectsData from '../../data/projects.json';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={styles.name}>Featured Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className={styles.projectBox}>
          <div>
            <img src={getImageUrl(project.image)} alt={project.altText} className={styles[`projectImage0${index + 1}`]} />
          </div>
          <div className={styles.projectInfo}>
            <h4 className={styles.projectTitle}>{project.title}</h4>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.buttons}>
               <button className={styles.buttonLink}>{project.liveLink}</button>
               <button className={styles.buttonCode}>{project.codeLink}</button>
            </div>
           
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
