import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import {
  ColorBoxWrapper,
  ColorBoxOverlay,
  ColorBoxAlert,
  ColorBoxName,
  ColorBoxCopy,
  ColorBoxMore,
} from "./styles/ColorBoxStyles";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { copied } = this.state;
    const { name, format, url, more } = this.props;
    // const darkBg = chroma(this.props[format]).luminance() <= 0.08;
    const lightBg = chroma(this.props[format]).luminance() >= 0.7;

    return (
      <CopyToClipboard text={this.props[format]} onCopy={this.handleCopy}>
        <ColorBoxWrapper
          height={this.props.height}
          bgcolor={this.props[format]}
          single={this.props.single}
        >
          <ColorBoxOverlay
            show={copied ? "true" : undefined}
            bgcolor={this.props[format]}
          ></ColorBoxOverlay>
          <ColorBoxAlert
            show={copied ? "true" : undefined}
            color={lightBg ? "black" : "white"}
          >
            <h1>copied</h1>
            <p>{this.props[format]}</p>
          </ColorBoxAlert>
          <div>
            <ColorBoxName color={lightBg ? "black" : "white"}>
              <span>{name}</span>
            </ColorBoxName>
            <ColorBoxCopy className="copy" color={lightBg ? "black" : "white"}>
              copy
            </ColorBoxCopy>
            {more && (
              <Link to={url} onClick={(e) => e.stopPropagation()}>
                <ColorBoxMore color={lightBg ? "black" : "white"}>
                  More
                </ColorBoxMore>
              </Link>
            )}
          </div>
        </ColorBoxWrapper>
      </CopyToClipboard>
    );
  }
}
