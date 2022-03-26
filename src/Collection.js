import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import {
  CollectionWrapper,
  CollectionContainer,
  CollectionNav,
  CollectionPalettes,
} from "./styles/CollectionStyles";
import "./styles/CSSTransition.css";
export default class Collection extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    return (
      <CollectionWrapper>
        <CollectionContainer>
          <CollectionNav>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </CollectionNav>
          <CollectionPalettes>
            <TransitionGroup component={null}>
              {this.props.palettes.map((palette) => (
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                  <MiniPalette
                    {...palette}
                    key={palette.id}
                    id={palette.id}
                    goToPalette={() => this.goToPalette(palette.id)}
                    deleteMiniPalette={this.props.deleteMiniPalette}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </CollectionPalettes>
        </CollectionContainer>
      </CollectionWrapper>
    );
  }
}
