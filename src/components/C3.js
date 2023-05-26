import styles from "../stylesheets/c3.module.css";
import { Icon } from '@iconify/react';
const C3 = () => {
  return (
    <div className={styles.main_div}>
      <img
        className={styles.splash1}
        alt=""
        src="/splash.jpg"
      />
      <img
        className={styles.people}
        alt=""
        src="/people.jpg"
      />
         {/* <div class="c3Child"></div> */}
      <div className={styles.inSearchOfContainer}>
        <span>{`In search of a software development company that stands out from the rest? `}</span>
        <span className={styles.chooseUs}>Choose us!</span>
      </div>
      <div className={styles.highlyTalentedAnd}>
        Highly talented and creative programmers with excellent problem-solving
        skills help you tackle all the complex issues in your digital journey.
      </div>
      <div className={styles.content}>
        <div className={styles.parent}>
          <b className={styles.b}>100+</b>
          <div className={styles.happyClients}>Happy Clients</div>
        </div>
        <div className={styles.content_line} />
        <div className={styles.parent}>
          <b className={styles.b}>500+</b>
          <div className={styles.happyClients}>
            Successful project deliveries
          </div>
        </div>
        <div className={styles.content_lin} />
        <div className={styles.parent}>
          <b className={styles.b}>35+</b>
          <div className={styles.happyClients}>Awards</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.group1}>
          <div className={styles.s}>S</div>
          <div className={styles.c}>C</div>
          <div className={styles.e}>E</div>
          <div className={styles.d}>D</div>
          <div className={styles.u}>U</div>
          <div className={styles.l}>L</div>
          <div className={styles.e1}>E</div>
          <div className={styles.div}> </div>
          <div className={styles.c1}>C</div>
          <div className={styles.a}>A</div>
          <div className={styles.l1}>L</div>
          <div className={styles.l2}>L</div>
          <div className={styles.div1}> </div>
          <div className={styles.div2}>*</div>
          <div className={styles.div3}>*</div>
          <div className={styles.div4}> </div>
          <div className={styles.s1}>S</div>
          <div className={styles.c2}>C</div>
          <div className={styles.h}>H</div>
          <div className={styles.h1}>H</div>
          <div className={styles.e2}>E</div>
          <div className={styles.d1}>D</div>
          <div className={styles.u1}>U</div>
          <div className={styles.l3}>L</div>
          <div className={styles.e3}>E</div>
          <div className={styles.div5}> </div>
          <div className={styles.c4}>C</div>
          <div className={styles.a1}>A</div>
          <div className={styles.l4}>L</div>
          <div className={styles.l5}>L</div>
          <div className={styles.div6}>*</div>
          <div className={styles.div7}>*</div>
          <div className={styles.div8}> </div>
        </div>
        <Icon icon="ph:phone-thin" color="white" width="26" height="26" className={styles.phone1Icon}  />
      </div>
    </div>
  );
};

export default C3;
