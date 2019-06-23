import React from "react";
import styles from "./TheCircles.module.css";
import CircleIcon from "../CircleIcon";
import { Circles } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  circles: Circles[];
}

const TheCircles: React.FC<Props> = ({ circles }) => {
  const circleElements = circles.map((circle, i) => (
    <div className={styles.icon} key={`circle-${i}`}>
      <Link to={`/${circle}`}>
        <CircleIcon name={circle} />
      </Link>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Link to="/all">
          <CircleIcon name="all" />
        </Link>
      </div>

      {circleElements}
    </div>
  );
};

export default TheCircles;
