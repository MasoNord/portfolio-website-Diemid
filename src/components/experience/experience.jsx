import React from 'react';

import skills from '../../../data/skills.json';
import history from '../../../data/history.json';

import styles from '../../styles/experience.module.css'

export default function experience() {
  return (
    <section className = {styles.container} id = "experience">
        <h2 className = {styles.title}>
            Experience
        </h2>
        <div className = {styles.content}>
            <div className = {styles.skills}>
                {
                    skills.map((skill, id) => {
                        return (
                        <div className = {styles.skill} key = {id}>
                            <div className = {styles.skillImageContainer}>
                                <img src = {skill.image} alt = {skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                        )
                    })
                }
            </div>
            <ul className = {styles.history}>
                {
                    history.map((history, id) => {
                        return (
                            <li className = {styles.historyItem} key = {id}>
                                <img 
                                    src = {history.imageSrc}
                                    alt = {`${history.organisation} Logo`}
                                />
                                <div className = {styles.historyItemDetails}>
                                    <h3>{`${history.role}, ${history.organisation}`}</h3>
                                    <p>{`${history.startDate} - ${history.endDate}`}</p>
                                    <ul>
                                        {history.experiences.map((experience, id) => {
                                            return (
                                                <li key = {id}>
                                                    {experience}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}
