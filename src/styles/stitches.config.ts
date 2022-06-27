import { createStitches } from "@stitches/react";

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      background: "#FFF",
      switch: "#202124"
    }
  }
});

export const darkTheme = createTheme({
  colors: {
    background: "#202124",
    switch: "#FFF"
  }
});
