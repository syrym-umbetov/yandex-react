import Box from "@/components/Box/Box";
import React from "react";
import styles from "./Faq.module.css";
import Accordion from "@/components/Accordion.tsx/Accordion";

const FAQ = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <Box>Вопросы-ответы</Box>
      <Accordion
        title='Что такое Билетопоиск?'
        content='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
      />
      <Accordion
        title='Какой компании принадлежит Билетопоиск?'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <Accordion
        title='Как купить билет на Билетопоиск?'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <Accordion
        title='Как оставить отзыв на Билетопоиск?'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
    </div>
  );
};

export default FAQ;
