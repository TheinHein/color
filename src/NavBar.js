import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  NavBarWrapper,
  NavBarLogo,
  NavBarFormatWrapper,
  NavBarSliderWrapper,
  NavBarLevelSlider,
} from "./styles/NavBarStyles";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { snackBar: false };
    this.selectFormat = this.selectFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  selectFormat(e) {
    this.setState({ snackBar: true });
    this.props.changeFormat(e.target.value);
  }
  closeSnackbar() {
    this.setState({ snackBar: false });
  }
  handleChange(evt, newValue) {
    this.props.changeLevel(newValue);
  }
  render() {
    const { level, isSingleColor, format } = this.props;

    return (
      <NavBarWrapper>
        <NavBarLogo>
          <Link to="/">reactcolorpicker</Link>
        </NavBarLogo>
        {!isSingleColor && (
          <NavBarSliderWrapper>
            <div className="level">Level: {level}</div>
            <div className="slider">
              <NavBarLevelSlider
                aria-label="Level"
                defaultValue={500}
                step={100}
                min={100}
                max={900}
                onChange={this.handleChange}
              />
            </div>
          </NavBarSliderWrapper>
        )}
        <NavBarFormatWrapper>
          <FormControl variant="filled" sx={{ minWidth: 100 }}>
            <InputLabel variant="filled" id="format-changer-label">
              Format
            </InputLabel>
            <Select
              labelId="format-changer-label"
              id="format-changer"
              onChange={this.selectFormat}
              value={format}
            >
              <MenuItem value="hex">HEX</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
              <MenuItem value="rgba">RGBA</MenuItem>
            </Select>
          </FormControl>
        </NavBarFormatWrapper>
        <Snackbar
          open={this.state.snackBar}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          severity="success"
        >
          <Alert onClose={this.closeSnackbar} severity="info" variant="filled">
            Format Changed To {format.toUpperCase()}
          </Alert>
        </Snackbar>
      </NavBarWrapper>
    );
  }
}
