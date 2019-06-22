import React, { CSSProperties } from "react";
import styles from "./CircleIcon.module.css";
import ReactSVG from "react-svg";
import { Circles } from "../../types";

interface Props {
  name: Circles;
  style?: CSSProperties;
}

const CircleIcon: React.FC<Props> = ({ name, style }) => {
  return (
    <div className={styles.container} style={style}>
      <ReactSVG src={require(`../../assets/_ionicons_svg_md-${name}.svg`)} />
    </div>
  );
};

export default CircleIcon;
