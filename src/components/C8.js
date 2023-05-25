import styles from "../stylesheets/c8.module.css";
const C8 = () => {
  return (
    <div className={styles.c8}>
      <div className={styles.areYouReadyToGoParent}>
        <div className={styles.areYouReady}>Are you ready to go?</div>
        <div className={styles.letsTalkParent}>
          <div className={styles.letsTalk}>Let’s Talk</div>
          <div className={styles.hi}>
            <div className={styles.div}>👋</div>
          </div>
        </div>
      </div>
      <img className={styles.icon} alt="" src="/-4189@2x.png" />
      <div className={styles.divabsolute}>
        <div className={styles.divpx20Parent}>
          <div className={styles.divpx20}>
            <div className={styles.empathize}>Empathize</div>
          </div>
          <div className={styles.defineTheChallengeContainer}>
            <p className={styles.defineTheChallenge}>
              Define the challenge and explore
            </p>
            <p className={styles.defineTheChallenge}>the human context</p>
          </div>
        </div>
      </div>
      <div className={styles.divabsolute1}>
        <div className={styles.divpx20Parent}>
          <div className={styles.divpx20}>
            <div className={styles.empathize}>Define</div>
          </div>
          <div className={styles.defineTheChallengeContainer}>
            <p className={styles.defineTheChallenge}>
              Research, observe, understand
            </p>
            <p className={styles.defineTheChallenge}>
              and create a point of view
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divpx20Container}>
        <div className={styles.divpx20}>
          <div className={styles.empathize}>Ideate</div>
        </div>
        <div className={styles.brainstormIdeasGoodContainer}>
          <p className={styles.defineTheChallenge}>
            Brainstorm ideas good and bad,
          </p>
          <p className={styles.defineTheChallenge}>
            don’t stop at the obvious.
          </p>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.divpx20}>
          <div className={styles.empathize}>Prototype</div>
        </div>
        <div className={styles.brainstormIdeasGoodContainer}>
          <p className={styles.defineTheChallenge}>
            Start creating, experiment, fall
          </p>
          <p className={styles.defineTheChallenge}>cheap and fast.</p>
        </div>
      </div>
      <div className={styles.divpx20Parent1}>
        <div className={styles.divpx20}>
          <div className={styles.empathize}>Test</div>
        </div>
        <div className={styles.brainstormIdeasGoodContainer}>
          <p className={styles.defineTheChallenge}>
            Implement the product, start to refine
          </p>
          <p className={styles.defineTheChallenge}>the product.</p>
        </div>
      </div>
      <div className={styles.yourIdeaDeservesADesignPrParent}>
        <div className={styles.yourIdeaDeservesContainer}>
          <span className={styles.yourIdeaDeservesContainer1}>
            <p className={styles.defineTheChallenge}>
              Your idea deserves a design
            </p>
            <p className={styles.defineTheChallenge}>
              <span>{`process that takes it from `}</span>
              <span className={styles.good}>good</span>
              <span className={styles.to}>{` to `}</span>
              <span className={styles.great}>great!</span>
            </p>
          </span>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default C8;
