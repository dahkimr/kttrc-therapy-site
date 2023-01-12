import React from "react";

import styles from "./styles.module.css";

const Divider = ({ color = "black", width = "1px" }) => (
    <div style={{ borderBottom: `${width} solid ${color}`}} />
);

export default Divider;
