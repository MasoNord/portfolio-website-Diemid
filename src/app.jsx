import { useState } from 'react'
import styles from "./styles/app.module.css"
import { Navbar } from './components/navbar/navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
    </div>
  )
}

export default App