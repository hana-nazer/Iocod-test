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
      <img className={styles.icon} alt="" src="/lines.png" />
      <div className={styles.empathizeParent}>
        <div className={styles.min_div}>
          <div className={styles.word}>
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
        <div className={styles.min_div}>
          <div className={styles.word}>
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
      <div className={styles.ideateContainer}>
        <div className={styles.word}>
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
        <div className={styles.word}>
          <div className={styles.empathize}>Prototype</div>
        </div>
        <div className={styles.brainstormIdeasGoodContainer}>
          <p className={styles.defineTheChallenge}>
            Start creating, experiment, fall
          </p>
          <p className={styles.defineTheChallenge}>cheap and fast.</p>
        </div>
      </div>
      <div className={styles.testParent}>
        <div className={styles.word}>
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
              <br />
              <span className={styles.good}>good</span>
              <span className={styles.to}>{` to `}</span>
              <span className={styles.great}>great!</span>
            </p>
          </span>
        </div>
        <svg
          className={styles.vectorIcon}
          width="79"
          height="46"
          viewBox="0 0 79 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_1233)">
            <rect width="79" height="46" fill="url(#paint0_linear_1_1233)" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.1679 -22.1757L37.2069 -22.0003C37.3404 -21.253 37.4587 -20.4904 37.6023 -19.9912C39.571 -13.189 39.2099 -5.17691 38.5463 1.80626C36.9501 18.514 36.2512 35.3051 35.8728 52.0869C35.7664 56.789 36.2365 61.4997 36.4353 66.1927C36.4956 67.5815 36.5787 68.9626 36.6581 70.3475C36.6993 70.9503 36.4692 72.2182 36.4801 72.8746C36.4824 73.3478 36.6024 73.6944 36.7102 73.8923C36.9951 74.387 37.4044 74.595 37.8586 74.6271C38.1526 74.6523 38.6257 74.6194 39.1231 74.1094C44.336 68.7293 48.7117 59.209 52.509 48.4856C58.0864 32.735 62.4679 14.3879 66.7749 3.31849C67.9091 0.408705 69.1982 -5.91744 70.9466 -11.1811C71.7173 -13.5166 72.5425 -15.6464 73.524 -17.0442C73.4812 -15.6663 73.2682 -13.9555 73.3112 -12.9788C73.5001 -8.75898 73.0366 -4.52459 72.9774 -0.307367C72.7931 12.5199 80.061 51.3331 83.3783 63.8224C86.0579 73.926 106.768 129.952 129.802 155.956C130.298 156.515 131.149 156.567 131.707 156.072C132.266 155.577 132.315 154.722 131.824 154.168C109.066 128.475 88.6337 73.1117 85.9852 63.1302C82.7068 50.7781 75.4906 12.4111 75.6757 -0.263472C75.7384 -4.53796 76.1942 -8.8259 76.005 -13.0991C75.9363 -14.6405 76.3782 -17.8712 76.0662 -19.2282C75.8906 -19.9944 75.4837 -20.4504 75.082 -20.6659C74.5884 -20.9267 73.8971 -21.0416 73.0454 -20.4191C71.6537 -19.3971 70.3858 -17.2804 69.319 -14.6152C67.1027 -9.06306 65.5779 -1.04146 64.2628 2.34244C59.9483 13.4271 55.5518 31.8051 49.9669 47.5862C46.8507 56.379 43.3907 64.3607 39.3264 69.716C39.2516 68.5028 39.1884 67.2933 39.1327 66.0762C38.9304 61.4405 38.4647 56.7947 38.5675 52.1498C38.9501 35.4328 39.6416 18.7029 41.2305 2.06387C41.9269 -5.24385 42.2516 -13.626 40.1975 -20.7407C39.9063 -21.7429 39.6862 -23.8217 39.2241 -24.659C38.9275 -25.1956 38.5176 -25.4872 38.124 -25.6035C37.6424 -25.7538 37.0585 -25.7395 36.4353 -25.2022C33.8779 -23.0104 30.6158 -18.2736 27.1799 -12.3796C19.3812 1.01217 10.5362 20.4311 6.58699 28.2244C3.934 33.4582 1.48023 38.8283 -1.33729 43.9752C-1.47722 44.2316 -4.54916 48.8912 -6.01503 51.1081C-6.72436 49.6691 -7.41832 47.4629 -8.12947 44.8905C-10.6206 35.8469 -12.8057 22.3445 -13.5206 18.2571C-14.8952 10.4177 -16.064 2.56223 -17.6216 -5.24567C-20.0794 -17.5675 -22.9374 -29.792 -25.2617 -42.1412C-25.3951 -42.8732 -26.1035 -43.3544 -26.8317 -43.2172C-27.5675 -43.08 -28.0487 -42.3717 -27.9115 -41.6434C-25.5909 -29.2828 -22.7291 -17.0468 -20.2674 -4.71357C-18.7137 3.06763 -17.5489 10.9041 -16.1782 18.7244C-15.4555 22.8499 -13.2431 36.4782 -10.7286 45.6056C-9.57822 49.7901 -8.28751 53.0581 -7.11355 54.304C-6.78366 54.6458 -5.91869 55.1375 -4.94995 54.2512C-3.7115 53.1154 0.830829 45.6359 1.03128 45.2723C3.86012 40.0987 6.32524 34.7019 8.99338 29.4452C12.9313 21.6787 21.7424 2.32471 29.5146 -11.0173C32.3109 -15.8205 34.947 -19.8406 37.1679 -22.1757Z"
              fill="#FFFFFC"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_1233"
              x1="39.5"
              y1="0"
              x2="39.5"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CEDD39" />
              <stop offset="1" stop-color="#43B4E7" />
            </linearGradient>
            <clipPath id="clip0_1_1233">
              <rect width="79" height="46" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default C8;
