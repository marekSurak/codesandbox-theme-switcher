import { styled } from "./styles/stitches.config";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$background",
  color: "$switch",

  transition: "background 0.25s"
});
