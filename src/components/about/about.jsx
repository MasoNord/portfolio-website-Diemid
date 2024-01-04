import React from 'react';

import styles from '../../styles/about.module.css';

import compas from '../../../assets/about/compas.png'
import frontIcon from '../../../assets/about/frontIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'

export default function About() {
  return (
    <section className={styles.container} id = "about">
      <h2 className = {styles.title}>About</h2>
      <div className = {styles.content}>
        <img src = {compas} alt = "There is nothing to add" className= {styles.aboutImage}/>
        <ul className = {styles.aboutItems}>
          <li className = {styles.aboutItem}>
            <img src = {frontIcon} alt = "Frontend Icon"/>
            <div className = {styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I have frontend experience in building small responsive website pages</p>
            </div>
          </li>
          <li className = {styles.aboutItem}>
            <img src = {serverIcon} alt = "Server Icon"/>
            <div className = {styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I'm a backend developer with experience in building backend services and APIs</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
