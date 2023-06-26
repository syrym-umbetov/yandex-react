import React, { FunctionComponent } from "react";
import Image from "next/image";
import { MovieType } from "@/@types/movie";
import Box from "../Box/Box";
import { useRouter } from "next/navigation";

const FilmCard: FunctionComponent<FilmCardProps> = ({ id, title, posterUrl }) => {
  const router = useRouter();
  return (
    <Box width='100%'>
      <div>
        <Image loader={({ src }) => src} src={posterUrl} alt='poster' width={100} height={120} />
      </div>
      <div className='' onClick={() => router.push(`/homepage/${id}`)}>
        {title}
      </div>
    </Box>
  );
};

export default FilmCard;

interface FilmCardProps extends MovieType {}
