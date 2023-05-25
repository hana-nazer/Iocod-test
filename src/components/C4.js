import styles from "../stylesheets/c4.module.css";
const C4 = () => {
  return (
    <div className={styles.c4}>
      <div className={styles.c4Inner} />
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <b className={styles.buildYourLegacy}>Get Started</b>
      </div>
      <img className={styles.maskGroupIcon1} alt="" />
      <div className={styles.getAnEstimateParent}>
        <div className={styles.getAnEstimate}>get an estimate</div>
        <div className={styles.groupWrapper}>
          <div className={styles.tryOurCostCalculatorParent}>
            <div className={styles.tryOurCost}>TRY OUR COST CALCULATOR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C4;
