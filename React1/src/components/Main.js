import React, { Component } from 'react';
import { players } from '../shared/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: players,
    };
  }

  render() {
    return <PlayersPresentation players={this.state.players} />;
  }
}
