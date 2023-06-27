import React, { FunctionComponent } from "react";
import Image from "next/image";
import { MovieType } from "@/@types/movie";
import Box from "../Box/Box";
import { useRouter } from "next/navigation";
import styles from "./FimCard.module.css";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import xmark from "../../assets/xmark.svg";
import { renameGenres } from "@/utils/renameGenres";
import { observer } from "mobx-react-lite";
import global from "@/store/global";

const FilmCard: FunctionComponent<FilmCardProps> = observer(({ id, title, posterUrl, genre, count, isBasket }) => {
  const { image, parent, flex } = styles;
  const { setQuantity, removeFromBasket } = global;
  const router = useRouter();

  // const [modal, setModal] = useState(true)

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
              <span style={{ margin: "0 5px" }}>{count}</span>
              <Image
                src={plus}
                alt='plus'
                onClick={() => {
                  setQuantity(id, "add");
                }}
              />
              {isBasket && (
                <Image
                  src={xmark}
                  alt='xmark'
                  onClick={() => {
                    // setModal(true);
                    removeFromBasket(id);
                  }}
                />
              )}
              {/* {modal && <Modal></Modal>} */}
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

interface FilmCardProps extends MovieType {
  isBasket?: boolean;
}

const Modal = () => {};
