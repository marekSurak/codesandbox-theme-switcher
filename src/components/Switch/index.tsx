import { FC } from "react";
import { Container, Toggle } from "./styled";

interface Props {
  switchMode: () => void;
  isDarkMode: boolean;
}

export const Switch: FC<Props> = ({ switchMode, isDarkMode }) => (
  <Container onClick={switchMode} isDarkMode={isDarkMode}>
    <Toggle
      layout
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30
      }}
    />
  </Container>
);
