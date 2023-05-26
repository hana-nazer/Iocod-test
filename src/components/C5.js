import styles from "../stylesheets/c5.module.css";
const C5 = () => {
  return (
    <div className={styles.c5}>
      <div className={styles.our5PillarsApproachWrapper}>
        <b className={styles.our5PillarsContainer}>
          <p className={styles.our5Pillars}>OUR 5 PILLARS</p>
          <p className={styles.our5Pillars}>APPROACH</p>
        </b>
      </div>
      <div className={styles.ewrParent}>
        <div className={styles.ewr}>
          <div className={styles.divapproacheditoslideshowInn}>
            <div className={styles.svg}>
              <div className={styles.frame}>
                <div className={styles.ins}>
                  <b className={styles.instinctive}>ORIGINAL</b>
                </div>
                <img className={styles.groupIcon} alt="" src="/group1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ewr}>
          <div className={styles.divapproacheditoslideshowInn}>
            <div className={styles.svg}>
              <div className={styles.frame}>
                <img
                  className={styles.clipPathGroup}
                  alt=""
                  src="/clip-path-group1.svg"
                />
                <img className={styles.frameChild} alt="" src="/group-11.svg" />
                <img className={styles.frameItem} alt="" src="/group-21.svg" />
                <div className={styles.ins1}>
                  <b className={styles.instinctive}>INSTINCTIVE</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C5;
