import BSButton from "react-bootstrap/Button";

import styles from "./styles.module.css";
import "./styles.css";

const Button = ({ text }) => (
  <BSButton variant="white-outline">{ text }</BSButton>
);

export default Button;