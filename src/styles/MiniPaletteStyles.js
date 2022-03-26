import { styled } from "@mui/material/styles";

const MiniPaletteWrapper = styled("div")`
  background-color: white;
  border-radius: 5px;
  padding: 0.3rem;
  position: relative;
  border: 1px solid black;
  :hover {
    cursor: pointer;
  }
`;
const MiniPaletteColors = styled("div")`
  background-color: grey;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 578px) {
    height: 100px;
  }
`;
const MiniPaletteColor = styled("div")`
  height: 25%;
  width: 20%;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  margin-bottom: -3.5px;
`;
const MiniPaletteName = styled("h5")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.3rem;
  font-size: 0.7rem;
  position: relative;
`;
const MiniPaletteEmoji = styled("span")`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

export {
  MiniPaletteWrapper,
  MiniPaletteColors,
  MiniPaletteColor,
  MiniPaletteName,
  MiniPaletteEmoji,
};
