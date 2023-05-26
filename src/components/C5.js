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
                <svg
                  className={styles.Icon1}
                  width="181"
                  height="156"
                  viewBox="0 0 181 156"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.2934 3.96249L65.8938 1L133.015 18.4156L151.045 31.8201M44.2934 3.96249L62.7238 23.6595M44.2934 3.96249L2 20.7557M151.045 31.8201L125.719 40.0047M151.045 31.8201L179.402 66.7851M62.7238 23.6595L29.2698 47.506M62.7238 23.6595L89.8583 30.7M2 20.7557L29.2698 47.506M2 20.7557L60.9505 154.016M125.719 40.0047L98.7442 33.0063M125.719 40.0047L142.888 77.6202M179.402 66.7851L142.888 77.6202M179.402 66.7851L60.9505 154.016M98.7442 33.0063L89.8583 30.7M98.7442 33.0063L101.741 76.9399M142.888 77.6202L101.741 76.9399M142.888 77.6202L60.9505 154.016M29.2698 47.506L65.7201 67.5947M29.2698 47.506L60.9505 154.016M89.8583 30.7L65.7201 67.5947M60.9505 154.016L65.7201 67.5947M60.9505 154.016L101.741 76.9399M65.7201 67.5947L101.741 76.9399"
                    stroke="#1A1A1A"
                    stroke-width="1.50342"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sub_div}>
          <div className={styles.inner_div1}>
            <div className={styles.svg}>
              <div className={styles.frame}>
                <img className={styles.frameChild} alt="not found" src= "image.png" />
               {/* -------------------------- */}
               
               {/* -------------------------------- */}
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
