import { useState } from "react";
import { Switch } from "./components/Switch";
import { Container } from "./styled";
import { globalStyles } from "./styles/global";
import { darkTheme } from "./styles/stitches.config";

export default function App() {
  // in real app you will use something like 'next-themes'
  // where you can easily switch theme within your app
  const [isDarkModeSet, setDarkMode] = useState<boolean>(false);

  const handleSwitchMode = () => {
    setDarkMode((isDarkModeSet) => !isDarkModeSet);
  };

  globalStyles();

  return (
    <Container className={isDarkModeSet ? darkTheme : null}>
      <Switch switchMode={handleSwitchMode} isDarkMode={isDarkModeSet} />
    </Container>
  );
}
