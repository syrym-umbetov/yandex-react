import React, { FunctionComponent } from "react";
import Image from "next/image";
import { MovieType } from "@/@types/movie";
import Box from "../Box/Box";
import { useRouter } from "next/navigation";
import styles from "./FimCard.module.css";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { renameGenres } from "@/utils/renameGenres";
import { observer } from "mobx-react-lite";
import global from "@/store/global";

const FilmCard: FunctionComponent<FilmCardProps> = observer(({ id, title, posterUrl, genre, count }) => {
  const { image, parent, flex } = styles;
  const { setQuantity } = global;
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
              <Image
                src={minus}
                alt='minus'
                onClick={() => {
                  setQuantity(id, "substract");
                }}
              />
              <span>{count}</span>
              <Image
                src={plus}
                alt='plus'
                onClick={() => {
                  setQuantity(id, "add");
                }}
              />
            </div>
          </div>
          <br />
          <div>{renameGenres(genre)}</div>
        </div>
      </div>
    </Box>
  );
});

export default FilmCard;

interface FilmCardProps extends MovieType {}
