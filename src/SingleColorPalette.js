import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  SingleColorPaletteGoBack,
  SingleColorPaletteBack,
  SingleColorPaletteWrapper,
  SingleColorPaletteColors,
} from "./styles/SingleColorPaletteStyles";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, emoji, paletteName } = this.props;
    const { format } = this.state;
    let singleColor = [];
    for (let level in colors) {
      singleColor = singleColor.concat(
        colors[level].filter(
          (color) => color.id === this.props.match.params.colorId
        )
      );
    }
    singleColor = singleColor.slice(1);
    const colorBox = singleColor.map((color) => (
      <ColorBox
        {...color}
        key={color.name}
        format={format}
        more={false}
        single
      />
    ));

    return (
      <SingleColorPaletteWrapper>
        <NavBar
          changeFormat={this.changeFormat}
          isSingleColor={true}
          format={format}
        />
        <SingleColorPaletteColors>
          {colorBox}
          <SingleColorPaletteGoBack>
            <Link
              to={`/palette/${this.props.match.params.paletteId}`}
              className="back"
            >
              <SingleColorPaletteBack>go back</SingleColorPaletteBack>
            </Link>
          </SingleColorPaletteGoBack>
        </SingleColorPaletteColors>
        <Footer emoji={emoji} paletteName={paletteName} />
      </SingleColorPaletteWrapper>
    );
  }
}
