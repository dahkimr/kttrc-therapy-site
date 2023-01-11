import React from "react";

import Divider from "../../components/sweetpotato/atoms/Divider";
import Navbar from "../Navbar";
import VerticalDivider from"../../components/sweetpotato/atoms/VerticalDivider";

import banner from "../../assets/banner.jpg";
import styles from "./styles.module.css";
import Button from "../../components/sweetpotato/atoms/Button";

const Banner = () => (
    <>
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.companyName}>
                    한국 트라우마 심리치료연구소<br/>
                    소울재 疏鬱齋 심리상담소
                </div>
                <div className={styles.contact}>
                    서울 강남구 언주로 118 (도곡동)<br/>
                    ​우성캐릭터 199 오피스텔 1815호<br/>
                    010-5533-1972<br/>
                    healingtraumakorea@gmail.com<br/>
                </div>
            </div>
            <div className={styles.divider}>
                <Divider color="black" />
            </div>
            <div className={styles.navbar}>
                <Navbar />
            </div>
        </div>
        <div className={styles.heroArea}>
            <img src={banner} className={styles.image} />
            <div className={styles.bannerText}>
                <div className={`${styles.companyBlob} ${styles.left}`}>
                    <h1 className={styles.title}>한국 트라우마 심리치료연구소</h1>
                    <div className={styles.rightSubtext}>
                        관계와 정서 기반으로<br/>
                        Body Mind 통합<br/>
                        트라우마 심리치료
                    </div>
                    <div className={styles.button}>
                        <Button text="More Info" />
                    </div>
                </div>
                <div className={styles.verticalDivider}>
                    <VerticalDivider height="500px" />
                </div>
                <div className={`${styles.companyBlob} ${styles.right}`}>
                    <h1 className={styles.title}>소울재 심리상담소</h1>
                    <div className={styles.rightSubtitle}>소울재 疏鬱齋</div>
                    <div className={styles.rightSubtext}>
                        답답한 마음을 풀어헤치다<br/>
                        답답한 마음을 소통하다<br/>
                        몸 마음 관계를 재계하다
                    </div>
                    <div className={styles.button}>
                        <Button text="More Info" />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Banner;
