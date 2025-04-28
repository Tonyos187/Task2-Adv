import { useState } from 'react';
import { Arrow, Logo } from './Arrow'
import Styles from './NavBar.module.css'
const NavBar = () => {
    const navLinks = [
        { name: "Home", path: "#home" },
        { name: "About Us", path: "#about" },
        { name: "Academics", path: "#academics" },
        { name: "Admissions", path: "#admissions" },
        { name: "Student Life", path: "#student" },
        { name: "Contact", path: "#contact" },
    ];
    const [activeLink, setActiveLink] = useState("#home");

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (

        <>
            <div className={Styles.firstNavContainer}>
                <p className={Styles.text}>Admission is Open, Grab your seat now</p>

                <div className={Styles.navArrowContainer}><Arrow className={Styles.navArrow} /></div>

                <img className={Styles.rightImage1} src="/assets/imgs/Nav/image_2025-04-23_02-36-07.webp" alt="" />
                <img className={Styles.leftImage1} src="/assets/imgs/Nav/image_2025-04-24_08-01-17.webp" alt="" />

                <img className={Styles.rightImage2} src="/assets/imgs/Nav/right2.webp" alt="" />
                <img className={Styles.leftImage2} src="/assets/imgs/Nav/left2.webp" alt="" />

                <img className={Styles.rightImage3} src="/assets/imgs/Nav/right3.webp" alt="" />
                <img className={Styles.leftImage3} src="/assets/imgs/Nav/left3.webp" alt="" />

                <img className={Styles.leftball1} src="/assets/imgs/Nav/image_2025-04-23_02-36-08.webp" alt="" />
                <img className={Styles.rightball1} src="/assets/imgs/Nav/image_2025-04-23_02-36-082.webp" alt="" />

                <img className={Styles.rightball2} src="/assets/imgs/Nav/rightball2.webp" alt="" />
                <img className={Styles.leftball2} src="/assets/imgs/Nav/leftball2.webp" alt="" />

                <img className={Styles.rightball3} src="/assets/imgs/Nav/rightball3.webp" alt="" />
                <img className={Styles.leftball3} src="/assets/imgs/Nav/leftball3.webp" alt="" />
            </div>

            <nav className={Styles.navContainer}>
                <div className={Styles.logoContainer}>
                    <div className={Styles.logoDiv}>
                        <Logo className={Styles.logo} />
                    </div>
                    <h1 className={Styles.logoText}>Little Learners</h1>
                </div>

                <div className={Styles.hamburger} onClick={toggleMenu}>
                    <img className={Styles.hamburgerIcon} src="/assets/icons/HamMenu.svg" alt="" />
                </div>

                <div className={Styles.navLinksContainer1}>
                    <ul className={`${Styles.navLinksContainer2} ${menuOpen && Styles.showMenu}`}>
                        {navLinks.map((link, index) => {
                            const isLast = index === navLinks.length - 1;
                            const isActive = activeLink === link.path;
                            return (
                                <li className={Styles.navLink} key={index}>
                                    <a className={`${Styles.navLinkText} ${isLast ? Styles.lastNavLinkText : ""} ${isActive && Styles.activeNavLink}`} href={link.path} onClick={() => {
                                        setActiveLink(link.path);
                                        closeMenu();
                                    }}
                                    >{link.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>



    )
}

export default NavBar