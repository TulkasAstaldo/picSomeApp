import React, { useContext } from "react";
import { Context } from "../Context";
import { getClass } from "../utils";
import Image from "../components/Image";

export default function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((image, i) => (
    <Image key={image.id} img={image} className={getClass(i)} />
  ));
  return <main className="photos">{imageElements}</main>;
}
