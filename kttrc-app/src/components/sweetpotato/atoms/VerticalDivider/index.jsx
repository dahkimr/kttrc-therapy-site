import React from "react";

import styles from "./styles.module.css";

const VerticalDivider = ({ height }) => (
    <div
        style={{ height }}
        className={styles.verticalDivider}
    />
);

export default VerticalDivider;