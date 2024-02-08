import React from 'react'
import styles from '../../styles/contact.module.css'
import emailIcon from '../../../assets/contact/emailIcon.png'
import githubIcon from '../../../assets/contact/githubIcon.png'
import linkedInIcon from '../../../assets/contact/linkedinIcon.png'

export default function contact() {
  return <footer id = 'contact' className={styles.container}>
    
    <div className={styles.text}>
        <h2>Contact</h2><p>Feel free to reach out!</p>
    </div>

    <ul className={styles.links}>
        <li className={styles.link}>
            <img src = {emailIcon} alt='Email Icon'></img>
            <a href='mailto:trotf233@gmail.com'>trotf233@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src = {githubIcon} alt='GitHub Icon'></img>
            <a href='https://github.com/MasoNord'>github.com/MasoNord</a>
        </li>
        <li className={styles.link}>
            <img src = {linkedInIcon} alt='LinkedIn Icon'></img>
            <a href='https://www.linkedin.com/in/diemid-berozkin-665118250/'>linkedin.com/in/diemid-berozkin-665118250/</a>
        </li>
    </ul>

  </footer>
}
