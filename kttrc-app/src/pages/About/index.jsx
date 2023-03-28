import Header from "../../components/sweetpotato/molecules/Header";
import Typography from "../../components/sweetpotato/atoms/Typography";
import Divider from "../../components/sweetpotato/atoms/Divider";

import styles from "./styles.module.css";
import profile from "../../assets/profile.png";
import Card from "../../components/sweetpotato/molecules/Card";

import Leaf1 from "../../assets/leaf1.jpg";
import Leaf2 from "../../assets/leaf2.jpg";
import Leaf3 from "../../assets/leaf3.jpg";
import Leaf4 from "../../assets/leaf4.jpg";
import Leaf5 from "../../assets/leaf5.jpg";
import Leaf6 from "../../assets/leaf6.jpg";

const About = () => (
    <div className={styles.container} id="aboutme">
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
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="rgba(158, 121, 0, 0.6)"
                buttonText="More Info"
                img={Leaf1}
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="rgba(111, 137, 7, 0.6)"
                buttonText="More Info"
                img={Leaf2}
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="rgba(43, 79, 8, 0.6)"
                buttonText="More Info"
                img={Leaf3}
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="rgba(111, 137, 7, 0.6)"
                buttonText="More Info"
                img={Leaf4}
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="rgba(43, 79, 8, 0.6)"
                buttonText="More Info"
                img={Leaf5}
            />
            <Card
                headerText="Somatic Therapy"
                text="몸과 마음관련댄 상담 등등"
                color="rgba(158, 121, 0, 0.6)"
                buttonText="More Info"
                img={Leaf6}
            />
        </div>
    </div>
);

export default About;