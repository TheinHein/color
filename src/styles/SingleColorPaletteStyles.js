import { styled } from "@mui/material/styles";
import { ColorBoxWrapper, ColorBoxCopy } from "./ColorBoxStyles";
const SingleColorPaletteGoBack = styled(ColorBoxWrapper)`
  height: 50%;
  background-color: black;
  @media (max-width: 768px) {
    width: 20%;
    height: 50%;
  }
  @media (max-width: 578px) {
    width: 100%;
    height: 10%;
  }
`;
const SingleColorPaletteBack = styled(ColorBoxCopy)`
  color: white;
  opacity: 1;
`;
const SingleColorPaletteWrapper = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const SingleColorPaletteColors = styled("div")`
  height: 90%;
`;
export {
  SingleColorPaletteGoBack,
  SingleColorPaletteBack,
  SingleColorPaletteWrapper,
  SingleColorPaletteColors,
};
