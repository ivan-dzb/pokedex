import React from "react";
import { Stat } from "../../types/pokemon";

type Props = {
  stats: Stat[];
};

const Stats = (props: Props) => {

  const getStatWidth = (stat: number) => {
    const maxStat = 255;
    const statPercentage = (stat / maxStat) * 100;
    return `${statPercentage}%`;
  };

  return (
    <>
      {props.stats.map((stat) => {
        return (
          <>
            <p style={{
              fontSize: "0.75rem",
              margin: "0.25rem 0",
            }}>{stat.stat.name}</p>
            <div 
            style={{
              backgroundColor: "blue",
              height: "0.75rem",
              borderRadius: "0 0.25rem 0.25rem 0",
              width: `${getStatWidth(stat.base_stat)}`,
            }}
            ></div>
          </>
        );
      })}
    </>
  );
};

export default Stats;
