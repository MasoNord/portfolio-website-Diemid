import { useState } from 'react'
import styles from "./styles/app.module.css"
import { Navbar } from './components/navbar/navbar'
import { Bio } from './components/hero/bio'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Bio/>
    </div>
  )
}

export default App