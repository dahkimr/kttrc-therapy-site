import Header from "../../components/sweetpotato/molecules/Header";
import Typography from "../../components/sweetpotato/atoms/Typography";
import Divider from "../../components/sweetpotato/atoms/Divider";

import styles from "./styles.module.css";
import profile from "../../assets/profile.png";
import Card from "../../components/sweetpotato/molecules/Card";

const About = () => (
    <div className={styles.container}>
        <Header text="About Me" />
        <div className={styles.content}>
            <img src={profile} className={styles.image} />
            <div>
                <Typography.Header1 text="김희정" />
                <Typography.Paragraph1
                    text="
                        여기는 김희정 상담사에 대한 내용,
                        비션 statement, 등등
                    "
                />
            </div>
        </div>
        <div className={styles.header}>정문 분야</div>
        <div className={styles.cardContainer}>
            {/* colors */}
            {/* 
            #469845
            #51881b
             */}
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="#395144"
                buttonText="More Info"
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="#4E6C50"
                buttonText="More Info"
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="#AA8B56"
                buttonText="More Info"
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="#AA8B56"
                buttonText="More Info"
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="#395144"
                buttonText="More Info"
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="#4E6C50"
                buttonText="More Info"
            />
        </div>
    </div>
);

export default About;