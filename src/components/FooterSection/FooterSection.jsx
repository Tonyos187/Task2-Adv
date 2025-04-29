import Styles from "./FooterSection.module.css";

const FooterSection = ({ sectionLinks }) => {
    return (
        <div className={Styles.rightDivSection}>
            <a href="sectionLinks[0]?.path" className={Styles.rightDivTitle}>{sectionLinks[0]?.name}</a>
            <div className={Styles.rightDivText}>
                {sectionLinks.slice(1).map((link, index) => (
                    <a
                        key={index}
                        className={Styles.rightDivTextLink}
                        href={link.path}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FooterSection