import React from "react";
import styles from "./Event.module.css";
import { Circles } from "../../types";
import CircleIcon from "../CircleIcon";
import { Link } from "react-router-dom";

interface Props {
  circle: Circles;
  author: String;
  text: String;
  showIcon?: boolean;
}

const Event: React.FC<Props> = ({ circle, author, text, showIcon = true }) => {
  return (
    <Link to={`/${circle}`}>
      <div className={styles.container}>
        {showIcon && (
          <CircleIcon name={circle} style={{ width: "20px", height: "20px" }} />
        )}
        <div className={styles.info}>
          <span className={styles.author}>{author}</span> sier ...
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Event;
