import React from "react";

import Banner from "./pages/Banner";
import About from "./pages/About";

import styles from "./styles.module.css";
import TraumaCenter from "./pages/TraumaCenter";
import Souljae from "./pages/Souljae";
import Contact from "./pages/Contact";

const App = () => (
    <div className={styles.container}>
        <Banner />
        <div className={styles.pages}>
            <About />
            <TraumaCenter />
            <Souljae />
            <Contact />
        </div>
    </div>
);

export default App;
