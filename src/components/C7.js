import styles from "../stylesheets/c7.module.css";
const C7 = () => {
  const annotation = (
    <svg
      className={styles.annotation}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.4048 17.005C38.7306 14.5182 22.2048 15.4476 11.2092 23.914C-0.121758 32.6389 2.05442 47.5098 15.4303 51.5314C17.4259 52.1314 19.3058 52.8256 21.6858 52.9904C21.8231 53 25.5416 62.2982 25.8252 62.3383C26.0499 62.3701 34.3755 53.9167 34.4887 53.9184C36.3529 53.9455 38.2288 53.7814 40.1026 53.6102C49.4283 52.7583 58.6999 50.2189 66.1759 46.1196C82.6186 37.1037 69.6649 20.2098 56.1685 17.918M58.9249 18.5964C59.5476 18.1975 60.1356 17.7459 60.7679 17.3622M61.4878 19.5615C62.3547 18.9436 63.2101 18.3167 64.0876 17.7146M63.8207 20.786C64.6874 20.1174 65.538 19.3158 66.4839 18.7599M66.1582 22.321C67.014 21.5766 67.9819 20.7631 68.9826 20.2082M68.6117 24.426C69.3846 23.6954 70.264 23.098 71.1491 22.5117M70.793 26.9011C71.4488 26.2849 72.1007 25.6784 72.8474 25.1706M72.379 29.4605C73.084 28.8052 73.861 28.1106 74.6965 27.6151M73.585 32.6392C74.3438 31.9825 75.1686 31.4111 75.9567 30.791M73.8259 36.4659C74.5915 35.891 75.3217 35.2486 76.1459 34.7555M15.224 53.2644C15.7826 52.8081 16.3819 52.3924 16.9838 51.9953M19.232 54.3989C19.8888 53.908 20.575 53.441 21.2442 52.9663M34.742 56.3682C35.5692 55.5351 36.3896 54.6958 37.1847 53.8325M33.3913 57.7929C32.7515 58.5264 31.987 59.1412 31.3341 59.8669M30.1229 61.1876C29.0083 62.0064 28.2696 63.2618 27.2593 64.1984M38.8234 55.895C39.9353 55.1142 40.9043 54.1589 42.0413 53.4104M44.257 55.3643C45.2106 54.4599 46.1127 53.385 47.1986 52.6355M49.3149 54.3886C50.1476 53.3365 51.1465 52.2958 52.25 51.515M54.7604 53.2557C55.8354 51.9461 57.0969 50.6162 58.455 49.5937M60.444 51.2269C61.8058 49.551 63.6394 48.0298 65.2821 46.6202M66.7429 49.3683C69.5844 45.7241 72.909 42.405 75.9713 38.9458M71.7631 47.2668C73.0286 45.7611 74.3859 44.2923 75.7148 42.839"
        stroke="#04000E"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const quotation = (
    <svg
      className={styles.frameIcon}
      width="68"
      height="47"
      viewBox="0 0 68 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.6281 10.5865C13.7116 10.3247 14.8191 10.1929 15.93 10.1935C24.7275 10.1935 31.8572 18.3415 31.8572 28.3885C31.8572 38.4385 24.7275 46.5865 15.93 46.5865C7.1325 46.5865 0 38.4415 0 28.3885C0 28.0945 0.005625 27.7975 0.0196875 27.5035H0C0 12.3385 10.8 -0.000488281 24.075 -0.000488281V6.10751C19.7691 6.10751 15.7978 7.78151 12.6281 10.5865ZM48.2737 10.5865C49.3369 10.3285 50.4394 10.1935 51.57 10.1935C60.3675 10.1935 67.5 18.3415 67.5 28.3885C67.5 38.4385 60.3675 46.5865 51.57 46.5865C42.7725 46.5865 35.6428 38.4415 35.6428 28.3885C35.6428 28.0945 35.6484 27.7975 35.6625 27.5035H35.6428C35.6428 12.3385 46.4428 -0.000488281 59.7178 -0.000488281V6.10751C55.4091 6.10751 51.4434 7.78151 48.2737 10.5865Z"
        fill="#C6E74A"
      />
    </svg>
  );
  return (
    <div className={styles.c7}>
      <div className={styles.testimonialsParent}>
        <div className={styles.testimonials}>Testimonials</div>
        {annotation}
      </div>
      <div className={styles.screenParent}>
        <img className={styles.screenIcon} alt="" src="/video.jpg" />
        <div className={styles.kevinHarringtonAboutIocodParent}>
          <b className={styles.kevinHarringtonAboutContainer}>
            <span>{`Kevin Harrington `}</span>
            <span className={styles.aboutIocod}>about IOCOD</span>
          </b>
          <div className={styles.kevinIsOne}>
            Kevin is one of the principal pioneers of the "As Seen On TV"
            Industry. As the owner of AsSeenOnTV Inc. and AsSeenOnTv.com, Kevin
            has launched over 1,000 products in over 100 countries in dozens of
            languages, creating over $6 billion in global sales.As media
            consumption transitioned to digital, in anticipation of the
            explosive potential, Kevin sold all of his AsSeenOnTV assets. He
            then transitioned to digital media and started investing in public
            and private companies. Kevin now sits on the board of directors for
            multiple companies and has created over $10 billion in value.
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.review1Parent}>
          <div className={styles.review1Child}>
            <div className={styles.sub_div}>
              <div className={styles.p}>
                <div className={styles.headspaceGivesMe}>
                  Headspace gives me a
                </div>
                <div className={styles.sliceOfThe}>
                  slice of the day that’s just
                </div>
                <div className={styles.forMe}>for me.</div>
              </div>
            </div>
            <div className={styles.sub_div2}>
              <div className={styles.nadienNewMexico}>Nadien, New Mexico</div>
              <div className={styles.onPrioritizingSelfCare}>
                on prioritizing self-care
              </div>
            </div>
            {quotation}
          </div>
          <div className={styles.divcssS1fwqh1}>
            <div className={styles.sub_div}>
              <div className={styles.p}>
                <div className={styles.theStressAnd}>
                  The stress and loneliness courses … taught me how to comfort
                  myself.
                </div>
              </div>
            </div>
            <div className={styles.sub_div2}>
              <div className={styles.nadienNewMexico}>Alicia, Canada</div>
              <div className={styles.onManagingThe}>
                on managing the trauma of sexual assault
              </div>
            </div>
            {quotation}
          </div>
          <div className={styles.divsibling}>
            <div className={styles.sub_div}>
              <div className={styles.p}>
                <div className={styles.yourAppBrings}>
                  Your app brings so much
                </div>
                <div className={styles.peaceAndTolerance}>
                  peace and tolerance to
                </div>
                <div className={styles.ourHome}>our home.</div>
              </div>
            </div>
            <div className={styles.sub_div2}>
              <div className={styles.rachaelUk}>Rachael, UK</div>
              <div className={styles.onMeditationsPositive}>
                on meditation’s positive effect on family life
              </div>
            </div>
            {quotation}
          </div>
          <div className={styles.divactive}>
            <div className={styles.sub_div}>
              {quotation}
              <div className={styles.p}>
                <div
                  className={styles.bestSoftwareDevelopment}
                >{`Best software development company `}</div>
              </div>
            </div>
            <div className={styles.sub_div2}>
              <div className={styles.peterBelgium}>Peter, Belgium</div>
              <div className={styles.infoliteBusinessLlp}>
                Infolite Business LLP
              </div>
            </div>
          </div>
          <div className={styles.divsibling1}>
            <div className={styles.divcss19k81078}>
              <div className={styles.p4}>
                <div className={styles.headspaceProvidesMe}>
                  Headspace provides me
                </div>
                <div className={styles.withA}>with … a connection to</div>
                <div className={styles.myselfAndA}>myself, and a</div>
                <div className={styles.disconnectionFrom}>
                  disconnection from
                </div>
                <div className={styles.negativeThoughts}>
                  negative thoughts,
                </div>
                <div className={styles.feelingsAndSensations}>
                  feelings, and sensations.
                </div>
              </div>
            </div>
            <div className={styles.sub_div2}>
              <div className={styles.keriUk}>Keri, UK</div>
              <div className={styles.onFindingHer}>
                on finding her happy place
              </div>
            </div>
            {quotation}
          </div>
          <div className={styles.divcssS1fwqh2}>
            <div className={styles.sub_div}>
              <div className={styles.p}>
                <div className={styles.changingMyThoughts}>
                  Changing my thoughts
                </div>
                <div className={styles.hasAllowedMe}>has allowed me to</div>
                <div className={styles.changeMyLife}>change my life.</div>
              </div>
            </div>
            <div className={styles.sub_div2}>
              <div className={styles.davideLondon}>Davide, London</div>
              <div className={styles.onUsingMeditation}>
                on using meditation to turn his life around
              </div>
            </div>
            {quotation}
          </div>
          <div className={styles.divcssS1fwqh3}>
            <div className={styles.sub_div}>
              <div className={styles.p}>
                <div className={styles.aHappyWorkforce}>
                  A happy workforce leads to a happy work environment.
                </div>
              </div>
            </div>
            <div className={styles.sub_div2}>
              <div className={styles.davideLondon}>Jaime, Spain</div>
              <div className={styles.onTheBenefitsContainer}>
                <p className={styles.onTheBenefits}>
                  on the benefits of his employees embracing meditation
                </p>
              </div>
            </div>
            {quotation}
          </div>
        </div>
      </div>

        <div className={styles.marqueeText}>
          <div className={styles.marqueContainer1}>
            <span>{`no one understands `}</span>
            <b className={styles.fintech}>fintech</b>
            <span> better than us.</span>
          </div>
          <div className={styles.marqueContainer2}>
            <span>{`no one understands `}</span>
            <b className={styles.fintech}>fintech</b>
            <span> better than us.</span>
          </div>
          <div className={styles.marqueContainer3}>
            <span>{`no one understands `}</span>
            <b className={styles.fintech}>fintech</b>
            <span> better than us.</span>
          </div>
        </div>
    </div>
  );
};

export default C7;
