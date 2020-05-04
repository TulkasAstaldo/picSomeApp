import React, { useContext } from "react";
import { Context } from "../Context";
import { getClass } from "../utils";
import Image from "../components/Image";

export default function Favorites() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map(
    (image, i) =>
      image.isFavorite && (
        <Image key={image.id} img={image} className={getClass(i)} />
      )
  );
  return <main className="favorites">{imageElements}</main>;
}
