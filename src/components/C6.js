import { useState } from "react";
import styles from "../stylesheets/c6.module.css";
const C6 = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  const [hover8, setHover8] = useState(false);
  const [hover9, setHover9] = useState(false);
  const [hover10, setHover10] = useState(false);

  const mouseOver1 = () => {
    setHover1(true);
  };
  const mouseLeave1 = () => {
    setHover1(false);
  };

  const mouseOver2 = () => {
    setHover2(true);
  };

  const mouseLeave2 = () => {
    setHover2(false);
  };

  const mouseOver3 = () => {
    setHover3(true);
  };

  const mouseLeave3 = () => {
    setHover3(false);
  };

  const mouseOver4 = () => {
    setHover4(true);
  };

  const mouseLeave4 = () => {
    setHover4(false);
  };

  const mouseOver5 = () => {
    setHover5(true);
  };

  const mouseLeave5 = () => {
    setHover5(false);
  };

  const mouseOver6 = () => {
    setHover6(true);
  };

  const mouseLeave6 = () => {
    setHover6(false);
  };

  const mouseOver7 = () => {
    setHover7(true);
  };

  const mouseLeave7 = () => {
    setHover7(false);
  };

  const mouseOver8 = () => {
    setHover8(true);
  };

  const mouseLeave8 = () => {
    setHover8(false);
  };

  const mouseOver9 = () => {
    setHover9(true);
  };

  const mouseLeave9 = () => {
    setHover9(false);
  };

  const mouseOver10 = () => {
    setHover10(true);
  };

  const mouseLeave10 = () => {
    setHover10(false);
  };

  return (
    <div className={styles.c6}>
      <div className={styles.whatWeDo}>what we do</div>
      <div className={styles.ul}>
        <div className={styles.mobAppDevParent}>
          <div
            className={styles.mobAppDev}
            onMouseOver={mouseOver1}
            onMouseLeave={mouseLeave1}
          >
            {hover1 ? (
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                we create hybrid mobile applications using flutter/React native.
                <br />
                Our ready to use or custom made apps can be integrated with all
                <br />
                our business solutions
              </p>
            ) : (
              <b className={styles.mobileAppDevelopment}>Web development </b>
            )}
          </div>

          <div
            className={styles.mobAppDev}
            onMouseOver={mouseOver2}
            onMouseLeave={mouseLeave2}
          >
            {hover2 ? (
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                we create hybrid mobile applications using flutter/React native.
                <br />
                Our ready to use or custom made apps can be integrated with all
                <br />
                our business solutions
              </p>
            ) : (
              <b className={styles.mobileAppDevelopment}>
                mobile app development
              </b>
            )}
          </div>

          <div
            className={styles.mobAppDev}
            onMouseOver={mouseOver3}
            onMouseLeave={mouseLeave3}
          >
            {hover3 ? (
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                we create hybrid mobile applications using flutter/React native.
                <br />
                Our ready to use or custom made apps can be integrated with all
                <br />
                our business solutions
              </p>
            ) : (
              <b className={styles.mobileAppDevelopment}>ux / ui design</b>
            )}
          </div>

          <div
            className={styles.mobAppDev}
            onMouseOver={mouseOver4}
            onMouseLeave={mouseLeave4}
          >
            {hover4 ? (
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                we create hybrid mobile applications using flutter/React native.
                <br />
                Our ready to use or custom made apps can be integrated with all
                <br />
                our business solutions
              </p>
            ) : (
              <b className={styles.mobileAppDevelopment}>content strategy</b>
            )}
          </div>
        </div>
        <div className={styles.scrollingContainer}>
          <div className={styles.scrollImg}>
            <div className={styles.scroll}>
              <div className={styles.sub_img1}>
                <div className={styles.span}>
                  <img className={styles.fullImage} alt="" src="/im1.png" />
                </div>
              </div>

              <div className={styles.sub_img}>
                <div className={styles.span1}>
                  <img className={styles.fullImage} alt="" src="/im2.png" />
                </div>
              </div>

              <div className={styles.sub_img}>
                <div className={styles.span2}>
                  <img className={styles.fullImage} alt="" src="/im3.png" />
                </div>
              </div>

              <div className={styles.sub_img}>
                <div className={styles.span3}>
                  <img className={styles.fullImage} alt="" src="/im4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.weAreSpecialised}>we are specialised in</div>
      <div className={styles.dwedParent}>
        <div
          className={styles.dwed}
          onMouseOver={mouseOver5}
          onMouseLeave={mouseLeave5}
        >
          {hover5 ? (
            <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
              we create hybrid mobile applications using flutter/React native.
              <br />
              Our ready to use or custom made apps can be integrated with all
              <br />
              our business solutions
            </p>
          ) : (
            <b className={styles.investmentManagementPortalContainer}>
              <span className={styles.investmentManagementPortalContainer1}>
                <p className={styles.investment}>Investment</p>
                <p className={styles.investment}>management portal</p>
              </span>
            </b>
          )}
        </div>

        <div
          className={styles.dwed}
          onMouseOver={mouseOver6}
          onMouseLeave={mouseLeave6}
        >
          {hover6 ? (
            <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
              we create hybrid mobile applications using flutter/React native.
              <br />
              Our ready to use or custom made apps can be integrated with all
              <br />
              our business solutions
            </p>
          ) : (
            <b className={styles.investmentManagementPortalContainer}>
              <span className={styles.investmentManagementPortalContainer1}>
                <p className={styles.investment}>crypto currency/</p>
                <p className={styles.investment}>blockchain applications</p>
              </span>
            </b>
          )}
        </div>

        <div
          className={styles.dwed}
          onMouseOver={mouseOver7}
          onMouseLeave={mouseLeave7}
        >
          {hover7 ? (
            <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
              we create hybrid mobile applications using flutter/React native.
              <br />
              Our ready to use or custom made apps can be integrated with all
              <br />
              our business solutions
            </p>
          ) : (
            <b className={styles.investmentManagementPortalContainer}>
              <span className={styles.investmentManagementPortalContainer1}>
                <p className={styles.investment}>crowd funding</p>
                <p className={styles.investment}>software</p>
              </span>
            </b>
          )}
        </div>

        <div
          className={styles.dwed}
          onMouseOver={mouseOver8}
          onMouseLeave={mouseLeave8}
        >
          {hover8 ? (
            <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
              we create hybrid mobile applications using flutter/React native.
              <br />
              Our ready to use or custom made apps can be integrated with all
              <br />
              our business solutions
            </p>
          ) : (
            <b className={styles.investmentManagementPortalContainer}>
              <span className={styles.investmentManagementPortalContainer1}>
                <p className={styles.investment}>merchant cash</p>
                <p className={styles.investment}>advance portal</p>
              </span>
            </b>
          )}
        </div>

        <div
          className={styles.dwed}
          onMouseOver={mouseOver9}
          onMouseLeave={mouseLeave9}
        >
          {hover9 ? (
            <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
              we create hybrid mobile applications using flutter/React native.
              <br />
              Our ready to use or custom made apps can be integrated with all
              <br />
              our business solutions
            </p>
          ) : (
            <b className={styles.investmentManagementPortalContainer}>
              <span className={styles.investmentManagementPortalContainer1}>
                <p className={styles.investment}>bnpl e-commerce</p>
                <p className={styles.investment}>solutions</p>
              </span>
            </b>
          )}
        </div>

        <div
          className={styles.dwed}
          onMouseOver={mouseOver10}
          onMouseLeave={mouseLeave10}
        >
          {hover10 ? (
            <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
              we create hybrid mobile applications using flutter/React native.
              <br />
              Our ready to use or custom made apps can be integrated with all
              <br />
              our business solutions
            </p>
          ) : (
            <b className={styles.investmentManagementPortalContainer}>
              <span className={styles.investmentManagementPortalContainer1}>
                <p className={styles.investment}>crm for finance</p>
                <p className={styles.investment}>industry</p>
              </span>
            </b>
          )}
        </div>
      </div>
    </div>
  );
};

export default C6;
