import React from "react";

import Banner from "./pages/Banner";
import About from "./pages/About";

import styles from "./styles.module.css";

const App = () => (
    <div className={styles.container}>
        <Banner />
        <div className={styles.pages}>
            <About />
        </div>
    </div>
);

export default App;
