import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
const dynamicStyle = (props) =>
  css`
    background-color: ${props.bgcolor};
    color: ${props.color};
  `;
const ColorBoxWrapper = styled("div")`
  width: 20%;
  height: 25%;
  ${(props) => props.single && `width: 20%; height: 50%;`}
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -3.5px;
  &:hover .copy {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 25%;
    height: 20%;
    ${(props) => props.single && `width: 20%; height: 50%`}
  }
  @media (max-width: 578px) {
    width: 100%;
    height: 5%;
    ${(props) => props.single && `height: 10%`}
  }
  ${dynamicStyle};
`;
const ColorBoxOverlay = styled("div")`
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: scale(0.1);
  ${dynamicStyle};
  ${(props) =>
    props.show &&
    `transform: scale(50);
    z-index: 10;
    position: absolute;
    transition: transform 0.6s ease-in-out;`}
`;
const ColorBoxAlert = styled("div")`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  transform: scale(0.1);
  opacity: 0;
  ${({ show }) =>
    show &&
    `z-index: 25;
  transform: scale(1);
  opacity: 1;
  transition: all 0.4s ease-in-out;
  transition-delay: 0.3s;`}
  & > h1 {
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    padding: 1rem;
    font-weight: 400;
    text-shadow: 1px 2px black;
    text-transform: uppercase;
    @media (max-width: 578px) {
      font-size: 2rem;
    }
  }
  & > p {
    font-weight: 100;
    font-size: 2rem;
  }
  ${dynamicStyle}
`;
const ColorBoxName = styled("div")`
  text-transform: uppercase;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  font-size: 0.5rem;
  letter-spacing: 1px;
  ${dynamicStyle}
`;
const ColorBoxCopy = styled("div")`
  text-transform: uppercase;
  position: absolute;
  width: 100px;
  height: 30px;
  display: inline-block;
  outline: none;
  border: none;
  text-decoration: none;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -15px;
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  line-height: 30px;
  font-size: 1rem;
  opacity: 0;
  ${dynamicStyle}
`;
const ColorBoxMore = styled("button")`
  text-transform: uppercase;
  border: none;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  cursor: pointer;
  ${dynamicStyle}
`;
export {
  ColorBoxWrapper,
  ColorBoxOverlay,
  ColorBoxAlert,
  ColorBoxName,
  ColorBoxCopy,
  ColorBoxMore,
};
