import React from "react";
import styles from "./CircleFeed.module.css";
import { Circles } from "../../types";
import Event from "../../components/Event";
import CircleIcon from "../../components/CircleIcon";

interface Props {
  match: any;
}
const events: { author: string; text: string; circle: Circles }[] = [
  {
    author: "Pål i Hagen",
    circle: "pub",
    text: "Åpna pubben nå! Kom kom godt folk...💩"
  },
  {
    author: "Kari Nordmann",
    circle: "pub",
    text: "Sitter å pilser nå"
  },
  {
    author: "Trygve Karlsen",
    circle: "pub",
    text: "Drar til puben nå. Skal være bra musikk, join join!"
  }
];

const CircleFeed: React.FC<Props> = ({ match }) => {
  const eventElements = events.map((event, i) => (
    <Event
      key={`event-${i}`}
      author={event.author}
      circle={event.circle}
      text={event.text}
      showIcon={false}
    />
  ));
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <CircleIcon name={match.params.circle} />
      </header>
      {eventElements}
    </div>
  );
};

export default CircleFeed;
