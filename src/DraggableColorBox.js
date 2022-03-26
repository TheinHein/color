import React from "react";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from "@mui/icons-material/Delete";
import chroma from "chroma-js";
const dynamicStyle = (props) =>
  css`
    height: ${props.height};
    background-color: ${props.bgColor};
    color: ${props.color};
  `;
const DraggableColorBoxWrapper = styled("div")`
  touch-action: manipulation;
  height: 25%;
  width: 20%;
  margin: 0 auto;
  padding: 0;
  display: inline-block;
  position: relative;
  margin-bottom: -7px;
  &:hover svg {
    color: white;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 25%;
    height: 20%;
  }
  @media (max-width: 578px) {
    width: 100%;
    height: 5%;
  }
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
const ColorBoxDelete = styled("button")`
  text-transform: uppercase;
  border: none;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0;
  background: transparent;
  text-align: center;
  cursor: pointer;
  ${dynamicStyle}
`;

export default function DraggableColorBox(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  const handleDelete = () => {
    props.deleteColor(props.id);
  };
  const lightBg = chroma(props.color).luminance() >= 0.7;

  return (
    <DraggableColorBoxWrapper
      sx={{ backgroundColor: `${props.color}` }}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <ColorBoxName color={lightBg ? "black" : "white"}>
        {props.name}
      </ColorBoxName>
      <ColorBoxDelete onClick={handleDelete}>
        <DeleteIcon />
      </ColorBoxDelete>
    </DraggableColorBoxWrapper>
  );
}
