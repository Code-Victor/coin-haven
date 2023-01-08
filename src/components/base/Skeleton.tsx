import { styled, keyframes } from "stitches.config";

const skeleton = keyframes({
  "100%": { backgroundPosition: "100% 50%" },
});


const Skeleton = styled("div", {
  boxSizing: "border-box",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
    " linear-gradient(to right,rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.4) 50%,rgba(255, 255, 255, 0) 90%),transparent",
    backgroundPosition: "0 0",
    backgroundRepeat: "repeat-y",
    backgroundSize: "50px 500px",
    animation: `${skeleton} 1.3s ease-in-out infinite`,
  },
});
export default Skeleton;
