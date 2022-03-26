import React from "react";
import "./Footer.css";

export default function Footer(props) {
  const { paletteName, emoji } = props;
  return (
    <div className="footer">
      <span className="emoji">{emoji}</span>
      <span className="palette-name">{paletteName}</span>
    </div>
  );
}
