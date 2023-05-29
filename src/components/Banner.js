import styles from "../stylesheets/banner.module.css";
import { Icon } from "@iconify/react";
import Explore from "./Explore";
const Banner = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <svg
          width="451"
          height="521"
          viewBox="0 0 451 521"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-232.771 -29.4751C-156.062 -179.248 27.8508 -238.319 178.011 -161.412C328.172 -84.5056 387.715 99.2552 311.006 249.028C234.298 398.801 50.3849 457.872 -99.7755 380.965C-249.936 304.059 -309.479 120.298 -232.771 -29.4751Z"
            stroke="#E3E3E3"
            stroke-opacity="0.2"
            stroke-width="0.5"
          />
          <path
            d="M-150.711 12.5535C-97.1544 -92.0155 31.2508 -133.258 136.091 -79.563C240.931 -25.8677 282.502 102.431 228.946 207C175.389 311.569 46.9843 352.812 -57.8556 299.117C-162.696 245.421 -204.267 117.122 -150.711 12.5535Z"
            stroke="#E3E3E3"
            stroke-opacity="0.2"
            stroke-width="0.5"
          />
        </svg>
        <svg
          className={styles.gradient}
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
              className={styles.btn_arrow}
            />
          </div>
          <svg
            className={styles.spiralIcon}
            width="48"
            height="59"
            viewBox="0 0 48 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.1599 14.6877C37.2088 14.4999 37.25 14.3471 37.2787 14.1842C37.4074 13.3371 37.2773 12.5283 37.0094 11.7111C36.6281 10.5744 36.0101 9.57673 35.2737 8.64846C34.0521 7.11978 32.5627 5.87031 30.9137 4.84306C28.4702 3.31618 25.83 2.31236 23.011 1.78404C21.4273 1.49236 19.8499 1.37133 18.2604 1.57137C17.6854 1.64277 17.1275 1.76947 16.572 1.91878C16.2503 2.00944 15.9504 2.20061 15.6482 2.36919C15.5399 2.42616 15.4317 2.48314 15.3319 2.40218C15.2671 2.32898 15.1977 2.21059 15.1882 2.1202C15.1771 1.90436 15.3087 1.74216 15.4824 1.65552C15.8275 1.45963 16.1577 1.23103 16.5347 1.12318C17.1432 0.934088 17.7688 0.800311 18.4117 0.721847C19.6248 0.526797 20.874 0.567833 22.1023 0.736686C26.391 1.34015 30.249 2.95935 33.6099 5.72683C35.1095 6.96383 36.3793 8.40752 37.2582 10.1547C38.0232 11.6853 38.4266 13.2536 37.9457 14.9941C38.0782 15.0602 38.2084 15.1038 38.3284 15.1598C39.8922 15.8076 41.4023 16.5981 42.7855 17.5959C44.1313 18.5634 45.3331 19.683 46.2117 21.099C46.4872 21.5499 46.7198 22.0282 46.9072 22.5112C47.7843 24.8981 47.0568 27.1212 44.9696 28.5724C44.2134 29.0967 43.383 29.4574 42.5104 29.7426C40.8082 30.2856 39.048 30.492 37.2713 30.5402C36.782 30.557 36.3004 30.5387 35.7985 30.5454C35.6957 30.5447 35.6053 30.5541 35.4572 30.5581C35.5189 30.7116 35.5681 30.8549 35.615 30.9757C36.089 32.1255 36.3744 33.3292 36.3334 34.5784C36.2903 36.1362 35.7841 37.5252 34.7175 38.6872C34.0806 39.3704 33.3446 39.8698 32.494 40.2554C31.1526 40.8636 29.7283 41.1149 28.2626 41.1878C28.0694 41.1966 27.8761 41.2053 27.6478 41.2063C27.6643 41.3645 27.6909 41.5102 27.705 41.6457C27.894 43.0194 27.7346 44.3381 27.0163 45.5551C26.5035 46.4423 25.7739 47.1123 24.9047 47.6484C23.7886 48.3359 22.5842 48.7242 21.3056 48.9489C19.5346 49.2707 17.7532 49.2737 15.9709 49.0484C15.8329 49.04 15.6825 49.0214 15.5095 49.0052C15.5385 49.1735 15.5627 49.2966 15.5893 49.4423C15.9031 50.9172 16.149 52.3991 16.169 53.9046C16.1843 54.5997 16.1421 55.2894 16.0772 55.9815C16.0386 56.488 15.8972 56.9939 15.6483 57.4538C15.4678 57.8039 15.2785 57.9607 14.9692 58.0615C14.9669 58.0389 14.9521 58.0061 14.9521 58.0061C15.2907 57.6396 15.4142 57.1813 15.4902 56.7051C15.6081 55.9733 15.6004 55.2431 15.5476 54.5177C15.4222 52.6577 15.0933 50.8189 14.664 49.002C14.6492 48.9693 14.6343 48.9365 14.6148 48.8586C14.5096 48.8353 14.3919 48.8019 14.264 48.781C11.1597 48.1454 8.27234 46.9618 5.64475 45.2028C4.24598 44.2751 2.97877 43.1852 2.01211 41.8012C1.66415 41.3122 1.3941 40.8035 1.18712 40.2426C1.03948 39.8126 0.959634 39.3755 0.97017 38.929C1.01453 37.9307 1.48615 37.1962 2.37726 36.7607C2.99652 36.4562 3.65183 36.3879 4.33915 36.4076C5.74888 36.4547 7.03813 36.8799 8.26057 37.5405C10.9752 39.0391 12.9073 41.2474 14.0194 44.1352C14.4583 45.2773 14.7788 46.4888 15.1523 47.6605C15.189 47.7937 15.2257 47.9269 15.2625 48.0601C15.31 48.078 15.335 48.0983 15.37 48.106C17.493 48.4214 19.6204 48.4508 21.7287 47.9682C22.9223 47.6953 24.0316 47.2712 25.0152 46.5176C26.6319 45.264 27.2747 43.3238 26.7571 41.2078C26.6418 41.197 26.4913 41.1784 26.3534 41.17C23.6274 40.986 21.0273 40.3663 18.5614 39.173C17.5386 38.6743 16.5765 38.1008 15.7312 37.3324C15.2399 36.8925 14.7789 36.4152 14.4893 35.8287C14.3184 35.5039 14.1778 35.1416 14.1175 34.7824C13.9626 33.9534 14.3212 33.2307 15.0518 32.7891C15.4724 32.551 15.9274 32.4236 16.4019 32.3741C17.2154 32.2893 18.0251 32.3876 18.8115 32.5911C20.665 33.0602 22.2999 33.9519 23.7519 35.171C25.3786 36.5318 26.6221 38.161 27.336 40.188C27.3508 40.2208 27.3657 40.2535 27.3953 40.3189C27.4982 40.3196 27.6136 40.3304 27.7164 40.3311C28.9133 40.3091 30.1086 40.1616 31.2577 39.7905C32.1528 39.5029 32.966 39.0869 33.6778 38.4645C34.6519 37.6205 35.2137 36.5454 35.3903 35.2821C35.5399 34.3071 35.4611 33.3331 35.179 32.3803C35.0196 31.8373 34.7947 31.3239 34.6026 30.7957C34.5213 30.5644 34.3639 30.478 34.1106 30.4587C32.3852 30.3417 30.6909 30.0844 29.0175 29.6993C26.4571 29.1326 23.9535 28.3429 21.603 27.1604C20.4578 26.5832 19.3834 25.9186 18.4359 25.0466C17.9672 24.6043 17.5514 24.1223 17.2945 23.5209C16.8846 22.5472 17.2143 21.6562 18.1583 21.1809C18.4177 21.0396 18.7044 20.9412 18.9958 20.8879C19.4555 20.8057 19.9074 20.7586 20.3641 20.7567C21.3802 20.7535 22.3926 20.9334 23.3693 21.2085C26.8027 22.1524 29.8222 23.8362 32.3795 26.3449C33.3216 27.2745 34.1501 28.3188 34.8173 29.4599C34.9141 29.6211 35.0061 29.7371 35.2345 29.7362C37.0681 29.7962 38.8799 29.7557 40.6812 29.3965C41.7112 29.1977 42.7092 28.9109 43.6432 28.448C44.1869 28.1857 44.7009 27.858 45.1378 27.447C46.2738 26.4034 46.6889 25.1266 46.4281 23.6119C46.2347 22.5242 45.7142 21.5849 45.0526 20.7173C44.1672 19.5648 43.077 18.6391 41.8631 17.8406C40.6116 17.0117 39.2863 16.3505 37.8926 15.7991C37.8201 15.761 37.7499 15.7455 37.6572 15.7323C37.5965 15.8072 37.5334 15.8594 37.4953 15.9319C36.9855 16.7389 36.3065 17.3465 35.4458 17.7447C34.8794 18.0093 34.2882 18.2537 33.6875 18.4077C31.1165 19.0528 28.5658 18.9076 26.0551 18.0502C25.4744 17.8481 24.9092 17.5758 24.4351 17.1912C24.2854 17.0698 24.1356 16.9484 23.996 16.8145C23.1639 15.9533 23.2612 14.9152 24.1894 14.1788C24.5804 13.8754 25.0283 13.6802 25.4934 13.5403C26.2226 13.3043 26.9885 13.2016 27.7716 13.1542C29.7345 13.0294 31.6774 13.2608 33.5862 13.7128C34.6509 13.9558 35.6922 14.304 36.739 14.5946C36.8871 14.5906 37.0173 14.6341 37.1599 14.6877ZM14.4457 47.8941C14.3183 47.4391 14.208 47.0394 14.0854 46.6296C13.6853 45.3122 13.2525 44.0096 12.5681 42.8133C11.2437 40.5187 9.40634 38.7801 6.97727 37.72C6.07923 37.3225 5.1299 37.0903 4.13869 37.1137C3.65945 37.118 3.1974 37.1777 2.75184 37.3954C2.12246 37.7124 1.76286 38.2067 1.7806 38.9244C1.79335 39.2657 1.83106 39.6272 1.96692 39.9443C2.15199 40.4047 2.38225 40.8604 2.66547 41.2763C3.47298 42.4484 4.53045 43.3888 5.68912 44.2045C8.21619 45.9854 11.0132 47.1784 14.0295 47.8461C14.1448 47.8569 14.2703 47.8552 14.4457 47.8941ZM33.986 29.5923C33.929 29.484 33.9118 29.4287 33.872 29.3757C33.3282 28.5416 32.7111 27.7722 32.0209 27.0675C30.259 25.2868 28.2084 23.9131 25.922 22.9067C24.3785 22.2339 22.7962 21.7365 21.1137 21.5922C20.572 21.5459 20.0149 21.5697 19.4726 21.6263C19.1336 21.6616 18.8041 21.7874 18.4894 21.9458C18.0337 22.1761 17.9055 22.5892 18.0804 23.0621C18.1617 23.2935 18.2857 23.4975 18.4324 23.6992C18.8475 24.2841 19.3863 24.7419 19.9657 25.1497C20.8421 25.7778 21.7768 26.3085 22.77 26.7417C26.2569 28.3083 29.9241 29.1936 33.7226 29.5855C33.7802 29.5909 33.8605 29.5939 33.986 29.5923ZM26.5327 40.2604C26.4983 40.1498 26.4888 40.0594 26.4467 39.9838C26.2711 39.6138 26.1281 39.229 25.9198 38.8738C24.7148 36.7381 22.9641 35.1732 20.7937 34.0747C19.7334 33.5457 18.6445 33.1796 17.4584 33.0863C16.9168 33.04 16.3822 33.0615 15.8517 33.231C14.9916 33.5263 14.6812 34.164 14.9991 35.0217C15.174 35.4946 15.49 35.8956 15.8363 36.2592C16.5835 37.0722 17.5129 37.6605 18.4905 38.1639C20.9283 39.4172 23.5308 40.0595 26.2467 40.256C26.3168 40.2715 26.4072 40.2621 26.5327 40.2604ZM36.8792 15.3909C36.7716 15.345 36.6991 15.3069 36.6391 15.2789C34.2835 14.4852 31.8634 13.9495 29.3752 13.855C28.3317 13.8153 27.2953 13.8435 26.27 14.0875C25.8127 14.1923 25.3499 14.3547 24.9394 14.5803C24.053 15.0611 24.0107 15.7507 24.7765 16.4133C25.2655 16.8305 25.8307 17.1028 26.434 17.3026C28.6695 18.0402 30.9342 18.1809 33.2357 17.6896C34.085 17.5097 34.8874 17.209 35.6132 16.7221C36.1148 16.3843 36.5391 15.9631 36.8792 15.3909Z"
              fill="#FFFFFC"
              fill-opacity="0.8"
            />
          </svg>
        </div>
      </div>
      <img className={styles.image1} alt="" src="/image%201.png" />
      <div className={styles.frameParent}>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} alt="" src="/iocod-logo.png" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.mdicellphoneWirelessParent}>
              <Icon
                icon="mdi:cellphone-wireless"
                className={styles.mdicellphoneWirelessIcon}
              />
              <div className={styles.getStarted}>Connect us</div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <Icon icon="la:grip-lines" />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>

      <Explore />

        {/* <div className={styles.min_circle}> */}

          <svg 
            width="86"
            height="173"
            viewBox="0 0 86 173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="rotate(90 43 43)">
              <path
                d="M0 86C0 134.057 35.6032 172.381 79.3705 172.381V0C35.6032 0 0 35.6032 0 86Z"
                fill="#04000E"
              />
              <path
                d="M46.8447 75.3149C5.03792 53.9029 -11.4441 2.54811 10.0354 -39.3911C31.515 -81.329 82.8198 -97.966 124.627 -76.554C166.433 -55.1416 182.915 -3.78752 161.436 38.1513C139.956 80.0901 88.6515 95.7268 46.8447 75.3149Z"
                stroke="white"
                stroke-opacity="0.5"
              />
            </g>
          </svg>
        {/* </div> */}

        <Icon
          icon="guidance:up-arrow"
          width="30"
          height="30"
          rotate={2}
          className={styles.up_arrow}
        />
      </div>
      <div className={styles.LogoParent}>
        <img className={styles.vue_icon} alt="" src="\vue.png" />
        <img className={styles.image2Icon} alt="" src="/img2.png" />
        <img className={styles.flutterIcon} alt="" src="/flutter.png" />
        <img className={styles.jsIcon} alt="" src="/js.png" />
        <img className={styles.Icon5} alt="" src="/img5.png" />
      </div>
    </div>
  );
};

export default Banner;