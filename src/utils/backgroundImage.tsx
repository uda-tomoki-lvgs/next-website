import { CSSProperties } from "react";
import { StaticImageData } from "next/image";

const BackgroundImage = (img: StaticImageData) => {
  return {
    backgroundImage: `url(${img.src})`,
  } as CSSProperties;
};

export default BackgroundImage;
