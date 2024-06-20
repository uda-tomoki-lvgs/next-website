
import { CSSProperties } from "react";
import toppage from "../../public/toppage.png";

const BackgroundImage = () => {
    return {
        backgroundImage: `url(${toppage.src})`,
        zIndex: "-1",
        position: "absolute",
        width: "100vw",
        height: "100vh",
    } as CSSProperties;
}

export default BackgroundImage