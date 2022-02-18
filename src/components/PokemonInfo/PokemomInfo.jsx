import React, { Component } from "react";

export default class PokemonInfo extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log("изменилось имя покемона");
    }
  }

  render() {
    return (
      <div>
        <h1>pokemonInfo</h1>
        <p>{this.props.pokemonName}</p>
      </div>
    );
  }
}
