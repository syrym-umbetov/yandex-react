import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const { footer, title } = styles;
  return (
    <footer className={footer}>
      <div className={title}>
        <Link href='faq'>Вопросы-ответы</Link>
      </div>
      <div className={title}>
        <Link href='about-us'>О нас</Link>
      </div>
    </footer>
  );
};

export default Footer;
