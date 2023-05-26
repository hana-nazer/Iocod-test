import styles from "../stylesheets/c5.module.css";
const C5 = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.our5PillarsApproachWrapper}>
        <b className={styles.our5PillarsContainer}>
          <p className={styles.our5Pillars}>OUR 5 PILLARS</p>
          <p className={styles.our5Pillars}>APPROACH</p>
        </b>
      </div>
      <div className={styles.subDiv_parent}>
        <div className={styles.sub_div}>
          <div className={styles.inner_div}>
            <div className={styles.svg}>
              <div className={styles.frame}>
                <div className={styles.text_div}>
                  <b className={styles.text}>ORIGINAL</b>
                </div>
                <img className={styles.Icon1} alt="" src="/group1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sub_div}>
          <div className={styles.inner_div}>
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
                  <b className={styles.text}>INSTINCTIVE</b>
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
