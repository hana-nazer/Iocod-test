import styles from "../stylesheets/c4.module.css";
const C4 = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.gridBackground}></div>
      <div className={styles.inner_div} />
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <b className={styles.get_button}>Get Started</b>
      </div>
      <div className={styles.getAnEstimateParent}>
        <div className={styles.getAnEstimate}>get an estimate</div>
        <div className={styles.wrapper_div}>
          <div className={styles.tryOurCostCalculatorParent}>
            <div className={styles.tryOurCost}>TRY OUR COST CALCULATOR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C4;
