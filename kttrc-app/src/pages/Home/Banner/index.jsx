import React from "react";

import Divider from "../../../components/sweetpotato/atoms/Divider";

import banner from "../../../assets/banner.jpg";
import styles from "./styles.module.css";

const Banner = () => (
    <>
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.companyName}>
                    한국 트라우마 심리치료 연구소<br/>
                    소울재 疎鬱齋 심리상담소
                </div>
                <div className={styles.contact}>
                    서울 강남구 언주로 118 (도곡동)<br/>
                    ​우성캐릭터 199 오피스텔 1815호<br/>
                    010.5533.1972<br/>
                    ktpi.souljae@gmail.com<br/>
                </div>
            </div>
            <div className={styles.divider}>
                <Divider color="black" />
            </div>
        </div>
        <img src={banner} className={styles.image} />
    </>
);

export default Banner;
