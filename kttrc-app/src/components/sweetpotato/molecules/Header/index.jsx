import Divider from "../../atoms/Divider";

import styles from "./styles.module.css";

const Header = ({ text }) => (
    <div>
        <div className={styles.text}>{ text }</div>
        <Divider width="2px" />
    </div>
);

export default Header;