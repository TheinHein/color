import React, { Component } from "react";
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import { PaletteWrapper, PaletteColors } from "./styles/PaletteStyles";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { level, format } = this.state;
    const { colors, id, emoji, paletteName } = this.props;
    const colorBox = colors[level].map((color) => (
      <ColorBox
        {...color}
        key={color.id}
        format={format}
        url={`/palette/${id}/${color.id}`}
        more={true}
      />
    ));

    return (
      <PaletteWrapper>
        <NavBar
          level={level}
          format={format}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <PaletteColors>{colorBox}</PaletteColors>
        <Footer emoji={emoji} paletteName={paletteName} />
      </PaletteWrapper>
    );
  }
}
