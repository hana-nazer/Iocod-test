import styles from "../stylesheets/c1.module.css";
import { Icon } from "@iconify/react";
const C1 = () => {
  return (
    <div className={styles.c1}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.unleashThePotentialOfTheDParent}>
          <div className={styles.unleashThePotentialContainer}>
            <p className={styles.unleashThe}>Unleash the</p>
            <p className={styles.unleashThe}>potential of the digital</p>
            <p className={styles.unleashThe}>transformation</p>
          </div>
          <div className={styles.inputYourBusinessContainer}>
            <b>i</b>
            <span
              className={styles.nputYourBusiness}
            >{`nput your business operations, and we’ll `}</span>
            <b>o</b>
            <span
              className={styles.nputYourBusiness}
            >{`utput the optimal software. `}</span>
            <b>cod</b>
            <span className={styles.nputYourBusiness}>
              ed by real problem solvers.
            </span>
          </div>
          <div className={styles.getStartedParent}>
            <div className={styles.getStarted}>Get Started</div>
            <Icon
              icon="guidance:up-arrow"
              rotate={1}
              className={styles.vectorIcon1}
            />
            {/* <img className={styles.vectorIcon1} alt="" src="/vector2.svg" /> */}
          </div>
          <img
            className={styles.spiralVectorIcon}
            alt=""
            src="/spiral-vector.svg"
          />
        </div>
      </div>
      <img className={styles.image1Icon} alt="" src="/image%201.png" />

      <div className={styles.frameParent}>
        <div className={styles.layer1Wrapper}>
          <img className={styles.layer1Icon} alt="" src="/layer-12.svg" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.mdicellphoneWirelessParent}>
              <Icon
                icon="mdi:cellphone-wireless"
                className={styles.mdicellphoneWirelessIcon}
              />
              {/* <img
                className={styles.mdicellphoneWirelessIcon}
                alt=""
                src="/mdicellphonewireless.svg"
              /> */}
              <div className={styles.getStarted}>Connect us</div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <Icon icon="la:grip-lines" />
            {/* <img
              className={styles.frameChild}
              alt=""
              src="/group-48097040.svg"
            /> */}
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <div className={styles.lParent}>
            <div className={styles.l}>L</div>
            <div className={styles.e}>e</div>
            <div className={styles.t}>t</div>
            <div className={styles.div}>’</div>
            <div className={styles.s}>s</div>
            <div className={styles.div1}> </div>
            <div className={styles.e1}>e</div>
            <div className={styles.x}>x</div>
            <div className={styles.p}>p</div>
            <div className={styles.l1}>l</div>
            <div className={styles.o}>o</div>
            <div className={styles.r}>r</div>
            <div className={styles.e2}>e</div>
            <div className={styles.div2}> </div>
            <div className={styles.t1}>t</div>
            <div className={styles.h}>h</div>
            <div className={styles.e3}>e</div>
            <div className={styles.div3}> </div>
            <div className={styles.c}>c</div>
            <div className={styles.r1}>r</div>
            <div className={styles.e4}>e</div>
            <div className={styles.a}>a</div>
            <div className={styles.t2}>t</div>
            <div className={styles.i}>i</div>
            <div className={styles.v}>v</div>
            <div className={styles.e5}>e</div>
            <div className={styles.div4}> </div>
            <div className={styles.w}>w</div>
            <div className={styles.o1}>o</div>
            <div className={styles.r2}>r</div>
            <div className={styles.k}>k</div>
            <div className={styles.div5}>.</div>
            <div className={styles.div6}> </div>
            <div className={styles.l2}>L</div>
            <div className={styles.e6}>e</div>
            <div className={styles.t3}>t</div>
            <div className={styles.div7}>’</div>
            <div className={styles.s1}>s</div>
            <div className={styles.div8}> </div>
            <div className={styles.e7}>e</div>
            <div className={styles.x1}>x</div>
            <div className={styles.p1}>p</div>
            <div className={styles.l3}>l</div>
            <div className={styles.o2}>o</div>
            <div className={styles.r3}>r</div>
            <div className={styles.e8}>e</div>
            <div className={styles.div9}> </div>
            <div className={styles.t4}>t</div>
            <div className={styles.h1}>h</div>
            <div className={styles.e9}>e</div>
            <div className={styles.div10}> </div>
            <div className={styles.c2}>c</div>
            <div className={styles.r4}>r</div>
            <div className={styles.e10}>e</div>
            <div className={styles.a1}>a</div>
            <div className={styles.t5}>t</div>
            <div className={styles.i1}>i</div>
            <div className={styles.v1}>v</div>
            <div className={styles.e11}>e</div>
            <div className={styles.div11}> </div>
            <div className={styles.w1}>w</div>
            <div className={styles.o3}>o</div>
            <div className={styles.r5}>r</div>
            <div className={styles.k1}>k</div>
            <div className={styles.div12}>.</div>
          </div>
        </div>
        <Icon
          icon="guidance:up-arrow"
          width="30"
          height="30"
          rotate={2}
          className={styles.vectorIcon2}
        />
        {/* <img className={styles.vectorIcon2} alt="" src="/vector3.svg" /> */}
      </div>
      <div className={styles.vuejsLogo21Parent}>
        <img className={styles.vuejsLogo21Icon} alt="" src="\vue.png" />
        <img className={styles.image2Icon} alt="" src="/img2.png" />
        <img className={styles.pngwingIcon} alt="" src="/flutter.png" />
        <img className={styles.pngwingIcon1} alt="" src="/js.png" />
        <img className={styles.pngwingIcon2} alt="" src="/img5.png" />
      </div>
    </div>
  );
};

export default C1;
