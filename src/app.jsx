import { useState } from 'react'
import styles from "./styles/app.module.css";
import './styles/index.css';
import { Navbar } from './components/navbar/navbar';
import { Bio } from './components/hero/bio';
import About  from './components/about/about';
import  Experience  from './components/experience/experience';
import { Projects } from './components/projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Bio />
      <About />
      <Experience />
      <Projects/>
    </div>
  )
}

export default App