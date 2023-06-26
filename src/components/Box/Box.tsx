import React, { FunctionComponent } from "react";
import styles from "./Box.module.css";

const Box: FunctionComponent<BoxProps> = ({ width, height, children, sticky }) => {
  const { box } = styles;
  return (
    <div className={`${box} ${sticky}`} style={{ width, height }}>
      {children}
    </div>
  );
};

export default Box;

type BoxProps = {
  width?: string;
  height?: string;
  children?: any;
  sticky?: string;
};
