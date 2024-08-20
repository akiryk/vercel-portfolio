import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 383.3 227.5"
      className="my-svg"
    >
      <defs>
        <clipPath id="kTopMask">
          <rect id="mask1" x="223" y="0" width="170" height="230" />
        </clipPath>
        <clipPath id="kBottomMask">
          <polygon
            id="mask2"
            points="279.3,54.8 215.6,118.4 334.7,237.5 393.3,178.8"
          />
        </clipPath>
        <clipPath id="aLeftMask">
          <polygon id="mask3" points="0,225.6 96.7,226.2 225.6,97.3 225.6,0 " />
        </clipPath>
        <clipPath id="aRightMask">
          <rect
            id="mask4"
            x="150"
            y="0"
            width="80"
            height="300"
            fill="rgba(0,0,0,0.25)"
          />
        </clipPath>
      </defs>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="325.6284"
        y1="67.1081"
        x2="283.6284"
        y2="109.1081"
      >
        <stop offset="0" style={{ stopColor: "#D1C71D" }} />
        <stop offset="0.1264" style={{ stopColor: "#CDC21D" }} />
        <stop offset="0.549" style={{ stopColor: "#C2B71B" }} />
        <stop offset="1" style={{ stopColor: "#BFB31B" }} />
      </linearGradient>
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="113.1107"
        x2="225.6398"
        y2="113.1107"
      >
        <stop offset="0.5767" style={{ stopColor: "#0091C1" }} />
        <stop offset="0.8762" style={{ stopColor: "#0070A3" }} />
      </linearGradient>
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="322.3282"
        y1="130.8078"
        x2="283.2769"
        y2="169.859"
      >
        <stop offset="0" style={{ stopColor: "#D1C71D" }} />
        <stop offset="0.1264" style={{ stopColor: "#CDC21D" }} />
        <stop offset="0.549" style={{ stopColor: "#C2B71B" }} />
        <stop offset="1" style={{ stopColor: "#BFB31B" }} />
      </linearGradient>
      <polygon
        id="kBottom"
        className={styles.st3}
        points="274.3,69.8 225.6,118.4 334.7,227.5 383.3,178.8"
        clipPath="url(#kBottomMask)"
      />
      <polygon
        id="aLeft"
        className={styles.st1}
        points="0,225.6 96.7,226.2 225.6,97.3 225.6,0 "
        clipPath="url(#aLeftMask)"
      />
      <polygon
        id="aRight"
        className={styles.st2}
        points="225.6,226.5 158.8,226.5 158.8,66.6 225.6,0"
        clipPath="url(#aRightMask)"
      />
      <polygon
        id="kTop"
        className={styles.st0}
        points="274.3,167.1 343.4,98 343.4,0.7 225.6,118.4"
        clipPath="url(#kTopMask)"
      />
    </svg>
  );
}
