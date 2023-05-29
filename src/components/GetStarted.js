import React from 'react'
import styles from "../stylesheets/getStarted.module.css";

function GetStarted() {
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
  )
}

export default GetStarted