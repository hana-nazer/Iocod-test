import styles from "../stylesheets/c3.module.css";
import { Icon } from "@iconify/react";
import Schedule from "./Schedule";
const C3 = () => {
  return (
    <div className={styles.main_div}>
      <img className={styles.splash1} alt="" src="/splash.jpg" />
      <img className={styles.people} alt="" src="/people.jpg" />
      <div className={styles.inSearchOfContainer}>
        <span>{`In search of a software development company that stands out from the rest? `}</span>
        <span className={styles.chooseUs}>Choose us!</span>
      </div>
      <div className={styles.highlyTalentedAnd}>
        Highly talented and creative programmers with excellent problem-solving
        skills help you tackle all the complex issues in your digital journey.
      </div>
      <div className={styles.content}>
        <div className={styles.parent}>
          <b className={styles.b}>100+</b>
          <div className={styles.happyClients}>Happy Clients</div>
        </div>
        <div className={styles.content_line} />
        <div className={styles.parent}>
          <b className={styles.b}>500+</b>
          <div className={styles.happyClients}>
            Successful project deliveries
          </div>
        </div>
        <div className={styles.content_lin} />
        <div className={styles.parent}>
          <b className={styles.b}>35+</b>
          <div className={styles.happyClients}>Awards</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <Schedule />
        <Icon
          icon="ph:phone-thin"
          color="white"
          width="26"
          height="26"
          className={styles.phone1Icon}
        />
      </div>
    </div>
  );
};

export default C3;
