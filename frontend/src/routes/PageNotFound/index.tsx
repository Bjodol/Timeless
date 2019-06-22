import React from "react";
import styles from "./PageNotFound.module.css";

interface Props {
  name: String;
}

const PageNotFound: React.FC<Props> = ({ name }) => {
  return <div className={styles.container}>404 Page not found</div>;
};

export default PageNotFound;
