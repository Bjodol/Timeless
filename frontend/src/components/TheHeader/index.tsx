import React from "react";
import styles from "./TheHeader.module.css";
import { Link } from "react-router-dom";

const TheHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1>timeless</h1>
      </Link>
    </div>
  );
};

export default TheHeader;
