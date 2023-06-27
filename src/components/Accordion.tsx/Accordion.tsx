"use client";
import React, { FC, useState } from "react";
import Box from "../Box/Box";
import styles from "./Accordion.module.css";

const Accordion: FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const { accordion, contentAnimation } = styles;

  return (
    <Box>
      <div className={accordion} onClick={() => setIsActive(!isActive)}>
        {title}
      </div>

      {isActive && (
        <>
          <br />
          <div className={contentAnimation}>{content}</div>
        </>
      )}
    </Box>
  );
};

export default Accordion;
