import React, { Component } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  MiniPaletteWrapper,
  MiniPaletteColors,
  MiniPaletteColor,
  MiniPaletteName,
  MiniPaletteEmoji,
} from "./styles/MiniPaletteStyles";

export default class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteMiniPalette(this.props.id);
  }
  render() {
    const { paletteName, emoji, colors } = this.props;
    return (
      <MiniPaletteWrapper onClick={this.props.goToPalette}>
        <DeleteIcon
          sx={{
            color: "white",
            fontSize: "medium",
            position: "absolute",
            zIndex: "10",
            right: "0",
            top: "0",
            backgroundColor: "#eb3d30",
            margin: "0.3rem",
            padding: "10px",
            borderRadius: "5px",
            opacity: "0",
            "&:hover": {
              transition: "all 0.3s ease-in-out",
              opacity: "1",
            },
          }}
          onClick={this.handleDelete}
        />
        <MiniPaletteColors>
          {colors.map((color) => (
            <MiniPaletteColor
              style={{ backgroundColor: color.color }}
              key={color.color}
            />
          ))}
        </MiniPaletteColors>
        <MiniPaletteName>
          {paletteName}
          <MiniPaletteEmoji>{emoji}</MiniPaletteEmoji>
        </MiniPaletteName>
      </MiniPaletteWrapper>
    );
  }
}
