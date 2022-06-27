import { motion } from "framer-motion";
import { styled } from "../../styles/stitches.config";

export const Container = styled("button", {
  border: "none",
  width: "10rem",
  height: "5rem",
  padding: "0 0.5rem",
  backgroundColor: "$switch",
  cursor: "pointer",
  borderRadius: "3rem",
  display: "flex",
  alignItems: "center",

  variants: {
    isDarkMode: {
      true: {
        justifyContent: "flex-end"
      },
      false: {
        justifyContent: "flex-start"
      }
    }
  }
});

export const Toggle = styled(motion.span, {
  width: "4rem",
  height: "4rem",
  backgroundColor: "$background",
  borderRadius: "50%",
  zIndex: "2"
});
