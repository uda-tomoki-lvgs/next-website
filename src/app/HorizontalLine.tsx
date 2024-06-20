import { CSSProperties } from "react";

interface PropsType {
  style?: CSSProperties;
}

const HorizontalLine = (props: PropsType) => {
  const defaultStyle = {
    width: "100%",
    height: "1px",
    backgroundColor: "#000000",
    margin: "10px 0"
  } as CSSProperties;

  return <div style={props.style ? props.style : defaultStyle}></div>;
};

export default HorizontalLine;
