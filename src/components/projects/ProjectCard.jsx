import React from 'react'

import styles from '../../styles/project.cards.module.css';

export default function ProjectCard ({project: {title, imageSrc, description, skills, source}}) {
  return (
    <div className = {styles.container}>
    <img src = {imageSrc} alt = {`Image of ${title}`} className={styles.image}></img>
    <h3 className = {styles.title}>{title}</h3>
    <p className = {styles.description}>{description}</p>
    <ul className = {styles.skills}>
      {
        skills.map((skill, id) => {
        return (
                <li className = {styles.skill} key = {id}>{skill}</li>
            )
        })
      }
    </ul>
    <div className = {styles.links}>
      <a className = {styles.link} href={source}>Source</a>
    </div>
  </div>
  )
}
