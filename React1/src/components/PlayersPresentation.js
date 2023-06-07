import React, { useState } from 'react';
import { players } from '../shared/ListOfPlayers';

export default function PlayersPresentation() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const openPopup = (player) => {
    setSelectedPlayer(player);
  };

  const closePopup = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className='container'>
      {players.map((player) => (
        <div className='column' key={player.id}>
          <div className='card'>
            <img src={player.img} alt='' />
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <p>
              <button onClick={() => openPopup(player)}>
                <a href='#popup1' id='openPopUp'>Detail</a>
              </button>
            </p>
          </div>
        </div>
      ))}
      {selectedPlayer && (
        <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={selectedPlayer.img} alt='' />
            <h2>{selectedPlayer.name}</h2>
            <a className='close' href='#' onClick={closePopup}>&times;</a>
            <div className='content'>
              {selectedPlayer.info}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
