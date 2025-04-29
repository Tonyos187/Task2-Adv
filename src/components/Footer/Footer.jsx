import FooterSection from '../FooterSection/FooterSection'
import Styles from './Footer.module.css'
import Logo from '/assets/icons/Logo.svg'
const Footer = () => {
    const contactInfo = [
        { name: "hello@littlelearners.com", imgPath: "/assets/icons/Subtract.svg" },
        { name: "+91 91813 23 2309", imgPath: "/assets/icons/Vector (Stroke)2.svg" },
        { name: "Somewhere in the World", imgPath: "/assets/icons/Subtract (1).svg" },
    ]
    const socialMedia = [
        { imgPath: "/assets/icons/Vector (1).svg", link: "https://www.facebook.com/" },
        { imgPath: "/assets/icons/Vector.svg", link: "https://www.twitter.com/" },
        { imgPath: "/assets/icons/Vector (2).svg", link: "https://www.linkedin.com/" },
    ]
    const links = [
        [
            { name: "Home", path: "#" },
            { name: "Features", path: "#" },
            { name: "Our Testimonials", path: "#" },
            { name: "FAQ", path: "#" }
        ],
        [
            { name: "About Us", path: "#" },
            { name: "Our Mission", path: "#" },
            { name: "Our Vission", path: "#" },
            { name: "Awards and Recognitions", path: "#" },
            { name: "History", path: "#" },
            { name: "Teachers", path: "#" }
        ],
        [
            { name: "Academics", path: "#" },
            { name: "Special Features", path: "#" },
            { name: "Gallery", path: "#" }
        ],
        [
            { name: "Contact Us", path: "#" },
            { name: "Information", path: "#" },
            { name: "Map & Direction", path: "#" }
        ]
    ]

    return (
        <footer className={Styles.footerContainer}>
            <div className={Styles.ContainerDiv1}>
                <div className={Styles.leftDiv}>

                    <div className={Styles.leftDivContent}>
                        <div className={Styles.logoContainer}>
                            <div className={Styles.logoDiv}>
                                <img className={Styles.logo} src={Logo} alt="Logo" />
                            </div>
                            <h2 className={Styles.logoText}>Little Learners</h2>
                        </div>
                        <p className={Styles.leftDivText}>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>

                    <div className={Styles.contactContainer}>
                        {contactInfo.map((contact, index) => {
                            return (
                                <div key={index} className={Styles.contactDiv}>
                                    <div className={Styles.contactDivImg}>
                                        <img className={Styles.contactImg} src={contact.imgPath} alt={contact.name} />
                                    </div>
                                    <a className={Styles.contactDivlink} href='#'>{contact.name}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={Styles.rightDiv}>
                    {links.map((section, index) => (
                        <FooterSection key={index} sectionLinks={section} />
                    ))}
                </div>
            </div>


            <div className={Styles.ContainerDiv2}>
                <div className={Styles.termsDiv}>
                    <p>Terms of Service</p>
                    <div className={Styles.borderDiv}></div>
                    <p>Privacy Policy</p>
                    <div className={Styles.borderDiv}></div>
                    <p>Cookie Policy</p>
                </div>
                <div className={Styles.socialDiv}>
                    {socialMedia.map((social, index) => {
                        return (
                            <a href="link" key={index} className={Styles.socialDivImg}>
                                <img className={Styles.socialImg} src={social.imgPath} alt="Social Media" />
                            </a>
                        )
                    })}
                </div>
            </div>


            <div className={Styles.copyrightDiv}>
                <p className={Styles.copyright}>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer