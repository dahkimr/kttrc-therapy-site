import Header from "../../components/sweetpotato/molecules/Header";
import Typography from "../../components/sweetpotato/atoms/Typography";

import styles from "./styles.module.css";
import profile from "../../assets/profile.png";

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
    </div>
);

export default About;