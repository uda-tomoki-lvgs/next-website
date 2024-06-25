import { CSSProperties } from "react";

const HorizontalLine = () => {
  const defaultStyle = {
    width: "100%",
    height: "1px",
    backgroundColor: "#000000",
    margin: "10px auto",
  } as CSSProperties;

  return <div style={defaultStyle}></div>;
};

export default HorizontalLine;
