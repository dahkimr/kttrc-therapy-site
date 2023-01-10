import React from "react";
import About from "./About";

import Banner from "./Banner";

import styles from "./styles.module.css";

const Home = () => (
    <>
        <Banner />
        <div className={styles.pages}>
            <About />
        </div>
    </>
);

export default Home;