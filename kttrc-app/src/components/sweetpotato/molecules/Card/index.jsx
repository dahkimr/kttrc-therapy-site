import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";

import styles from "./styles.module.css";

const Card = ({ headerText, text, buttonText, color, img}) => (
    // <div className={styles.card} style={{ backgroundColor: color }}>
    <div
        className={styles.card}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(${color}, ${color}), url(${img})` }}
    >
        <div className={styles.header}><Typography.Header3 text={headerText} /></div>
        <div className={styles.text}><Typography.Paragraph1 text={text} /></div>
        <div className={styles.button}><Button text={buttonText} /></div>
    </div>
);

export default Card;