import React from "react";
import styles from "../stylesheets/IoMarquee.module.css";


function IoMarquee() {
  const circle = (
    <svg
      className={styles.frameChild}
      width="109"
      height="110"
      viewBox="0 0 109 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M51 0.5H57L55.125 53.5H52.875L51 0.5Z" fill="#C6E74A" />
      <path
        d="M92.6925 16.5L96.6685 20.9935L55.7335 54.7106L54.2425 53.0255L92.6925 16.5Z"
        fill="#C6E74A"
      />
      <path
        d="M108.026 51.7319L107.999 57.7318L55.0082 55.625L55.018 53.375L108.026 51.7319Z"
        fill="#C6E74A"
      />
      <path
        d="M93.4408 91.2878L89.163 95.495L53.3368 56.3925L54.941 54.8148L93.4408 91.2878Z"
        fill="#C6E74A"
      />
      <path d="M57 109.5H51L52.875 56.5H55.125L57 109.5Z" fill="#C6E74A" />
      <path
        d="M19.3792 97.2849L15 93.1834L52.5982 55.7817L54.2405 57.3198L19.3792 97.2849Z"
        fill="#C6E74A"
      />
      <path
        d="M0 58.5L0.00752408 52.5L53.0051 54.4415L53.0023 56.6915L0 58.5Z"
        fill="#C6E74A"
      />
      <path
        d="M14 18.7076L18.2774 14.5L54.1076 53.5988L52.5035 55.1767L14 18.7076Z"
        fill="#C6E74A"
      />
      <circle cx="53.5" cy="55" r="4.5" fill="#C6E74A" />
    </svg>
  );
  return (
    <>
      <div className={styles.c2}>
        <div className={styles.inputParent}>
          {circle}
          <div className={styles.input}>
            <b className={styles.iocod}>I</b>
            <span className={styles.nput}>NPUT</span>
          </div>
          {circle}
          <div className={styles.input}>
            <b>O</b>
            <span className={styles.utput}>UTPUT</span>
          </div>
          {circle}
          <div className={styles.input}>
            <b>COD</b>
            <span className={styles.nput}>E</span>
          </div>
          {circle}
        </div>
      </div>
    </>
  );
}

export default IoMarquee;
