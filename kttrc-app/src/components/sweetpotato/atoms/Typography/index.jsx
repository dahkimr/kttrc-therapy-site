import styles from "./styles.module.css";

const Header1 = ({ text }) => (
    <div className={styles.header1}>{ text }</div>
);

const Paragraph1 = ({ text }) => (
    <div className={styles.paragraph1}>{ text} </div>
);

export default {
    Header1,
    Paragraph1,
};