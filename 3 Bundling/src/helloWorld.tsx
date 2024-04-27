import React from "react";
import classes from "./averageComponentStyles.scss";

export const AverageComponent: React.FC = () => {
  const [average, setAverage] = React.useState(0);

  return (
    <div>
      <span className={classes.resultBackground}>
        Hola Mundo
      </span>
    </div>
  );
};