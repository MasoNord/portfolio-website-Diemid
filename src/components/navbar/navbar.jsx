import React, {useState} from 'react';
import styles from "../../styles/navbar.module.css";
import { getImageUrl } from '../../utils/load.image';

import menuItem from '../../../assets/nav/menuIcon.png';
import closeItem from '../../../assets/nav/closeIcon.png';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className={styles.navBar}>
        <a className = {styles.title}
            href='/'>Portfolio
        </a>
        <div className = {styles.menu}>
            <img
                className = {styles.menuBtn}
                // src = {getImageUrl('/nav/menuicon.png')}
                src = {
                    menuOpen
                        ? closeItem
                        : menuItem
                }
                alt = "menu-button"
                onClick = {() => setMenuOpen(!menuOpen)}
            />
            <ul className= {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick= {() => setMenuOpen(false)}>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
}