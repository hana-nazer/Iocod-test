import styles from "../stylesheets/c9.module.css";
import { Icon } from "@iconify/react";
const C9 = () => {
  return (
    <div className={styles.c9}>
      <div className={styles.c9Inner}>
        <div className={styles.frameParent}>
          <div className={styles.letsBuildTogetherParent}>
            <b className={styles.letsBuildTogether}>Let’s build together</b>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.calicutParent}>
              <b className={styles.calicut}>Calicut</b>
              <div className={styles.groundFloor}>
                Ground Floor , CyberparkNellikode. PO - CalicutKerala - India -
                673 016.
              </div>
            </div>
            <div className={styles.calicutParent}>
              <b className={styles.calicut}>Bangalore</b>
              <div className={styles.thFloorNovelContainer}>
                <p className={styles.thFloorNovel}>
                  4th floor, Novel tech park Kudlu Gate
                </p>
                <p className={styles.thFloorNovel}>Bangalore-560068</p>
              </div>
            </div>
            <div className={styles.calicutParent}>
              <b className={styles.calicut}>Wyoming</b>
              <div className={styles.thFloorNovelContainer}>
                30 N Gould St Ste R Sheridan, WY 82801+1 (631) 363-1850
              </div>
            </div>
            <div className={styles.calicutParent}>
              <b className={styles.calicut}>Netherland</b>
              <div className={styles.thFloorNovelContainer}>
                <p className={styles.thFloorNovel}>
                  de WERKplaats Sittard (De WERKplaats), Rijksweg Zuid 27, 6131
                  AL Sittard, Netherlands
                </p>
                <p className={styles.thFloorNovel}>+31 6 40 80 28 07</p>
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.layer1Parent}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img className={styles.layer1Icon} alt="" src="/iocod-logo.png" />
            <span
              style={{
                position: "absolute",
                top: -15,
                left: 80,
                color: "black",
                fontSize: "70px",
                width: "50%",
                zIndex: 1,
              }}
            >
              iocod
            </span>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.call24OutlineParent}>
              <Icon
                icon="humbleicons:phone-call"
                width="26"
                height="26"
                className={styles.call24Outline}
              />
              <div className={styles.div}>+91 9847153096</div>
            </div>
            <div className={styles.call24OutlineParent}>
              <Icon
                icon="ion:mail-open-outline"
                width="26"
                height="26"
                className={styles.call24Outline}
              />
              <div className={styles.div}>info@iocod.com</div>
            </div>
          </div>
        </div>
        <div className={styles.getValuableStrategyCultureParent}>
          <div className={styles.getValuableStrategy}>
            Get valuable strategy, culture, and brand insights straight to your
            inbox.
          </div>
          <div className={styles.yourEmailHereParent}>
            <div className={styles.calicut}>Your email here</div>
            <Icon
              icon="guidance:up-arrow"
              width="26"
              height="26"
              rotate={1}
              className={styles.vectorIcon}
            />
          </div>
        </div>
      </div>
      <div className={styles.copyright2023IocodParent}>
        <div className={styles.copyright2023}>Copyright © 2023 IOCOD</div>
        <div className={styles.instagram24OutlineParent}>
          <Icon icon="uil:instagram" className={styles.instagram24Outline} />
          <Icon
            icon="carbon:logo-facebook"
            className={styles.instagram24Outline}
          />
          <Icon icon="formkit:linkedin" className={styles.instagram24Outline} />
          <Icon
            icon="brandico:twitter-bird"
            color="white"
            className={styles.twitter24Outline}
          />
        </div>
        <div className={styles.termsConditionsParent}>
          <div className={styles.calicut}>{`Terms & Conditions`}</div>
          <div className={styles.calicut}>Privacy policy</div>
          <div className={styles.calicut}>Cancellation</div>
        </div>
      </div>
    </div>
  );
};

export default C9;
