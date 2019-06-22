import React from "react";
import styles from "./HomePage.module.css";
import TheCircles from "../../components/TheCircles";
import Event from "../../components/Event";
import { Circles } from "../../types";

interface Props {
  name: String;
}

const circlesJoined: Circles[] = [
  "bus",
  "school",
  "church",
  "fish",
  "hotel",
  "pub",
  "store",
  "town"
];

const HomePage: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.latestEvent}>
        <Event
          circle="pub"
          author="Pål i Hagen"
          text="Åpna pubben nå! Kom kom godt folk...💩"
        />
      </div>
      <TheCircles circles={circlesJoined} />
    </div>
  );
};

export default HomePage;
