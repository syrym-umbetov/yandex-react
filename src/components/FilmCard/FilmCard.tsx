import React, { FunctionComponent } from "react";
import Image from "next/image";
import { MovieType } from "@/@types/movie";
import Box from "../Box/Box";
import { useRouter } from "next/navigation";
import styles from "./FimCard.module.css";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

const FilmCard: FunctionComponent<FilmCardProps> = ({ id, title, posterUrl, genre }) => {
  const { image, parent, flex } = styles;
  const router = useRouter();
  return (
    <Box width='100%'>
      <div className={parent}>
        <div>
          <Image className={image} loader={({ src }) => src} src={posterUrl} alt='poster' width={100} height={120} />
        </div>
        <div style={{ flex: 1 }}>
          <div className={flex}>
            <div onClick={() => router.push(`/homepage/${id}`)}>{title}</div>
            <div className={flex}>
              <Image src={minus} alt='minus' />
              <span>0</span>
              <Image src={plus} alt='plus' />
            </div>
          </div>
          <br />
          <div>{genre}</div>
        </div>
      </div>
    </Box>
  );
};

export default FilmCard;

interface FilmCardProps extends MovieType {}
