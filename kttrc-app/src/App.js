import React from "react";

import Banner from "./pages/Banner";
import About from "./pages/About";

import styles from "./styles.module.css";

const App = () => (
    <>
        <Banner />
        <div className={styles.pages}>
            <About />
        </div>
    </>
);

export default App;
