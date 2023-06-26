import React from "react";
import styles from "./Header.module.css";
import basket from "../../assets/basket.svg";
import Image from "next/image";

const Header = () => {
  const { nav, title } = styles;
  return (
    <header className={nav}>
      <div className={title}>Билетопоиск</div>
      <Image src={basket} alt='basket' />
    </header>
  );
};

export default Header;
