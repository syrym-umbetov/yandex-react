import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  const { loader } = styles;
  return <span className={loader}></span>;
};

export default Loader;
