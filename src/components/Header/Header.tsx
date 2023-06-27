"use client";
import React from "react";
import styles from "./Header.module.css";
import basket from "../../assets/basket.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { nav, title } = styles;
  return (
    <header className={nav}>
      <div className={title}>Билетопоиск</div>
      <Image
        src={basket}
        alt='basket'
        onClick={() => {
          router.push("/basket");
        }}
      />
    </header>
  );
};

export default Header;
