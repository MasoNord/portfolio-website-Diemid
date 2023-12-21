import React from 'react'
import myface from '../../../assets/hero/myface.png';
import styles from '../../styles/bio.module.css'

export const Bio = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Diemid
            </h1>
            <p className={styles.description}>
                I'm a software developer and computer science enthusiast.<br />
                Specialize in building a backend using Java and Spring<br />
                Reach out if you'd like to learn more!<br />
            </p>
            <a href='trotf233@gmail.com' className={styles.contactBtn}>Contract Me </a>
        </div>
        <img src = {myface} alt = "My face" className={styles.heroImg}/>
        <div className= {styles.topBlur}/>
        <div className= {styles.bottomBlur}/>
    </section>
  );
}
