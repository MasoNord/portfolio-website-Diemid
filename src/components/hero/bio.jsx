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
                Diemid is a self-taught software developer and computer science enthusiast.<br />
                Diemid specializes in building a backend for web sites using cutting-edge technologies and tools.<br />
                All his projects are built from the ground up, from planning and designing all the way down to solving real-world problems with code.<br />
                He is a passionate programmer who enjoys using his skills to build things that make the world a better place. <br />
                Reach out if you'd like to learn more ! <br />
                <a href='trotf233@gmail.com' className={styles.contactBtn}>Contract Me </a>
            </p>
        </div>
        <img src = {myface} alt = "My face" className={styles.heroImg}/>
        <div className= {styles.topBlur}/>
        <div className= {styles.bottomBlur}/>
    </section>
  );
}
