import React, { useState } from 'react';

function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    if (isEditing) {
      // Call onChangeName before toggling editing mode off
      onChangeName(symbol, playerName);
    }
    setIsEditing((editing) => !editing); // Toggle edit mode
  }

  function handleChange(event) {
    setPlayerName(event.target.value); // Update local state for player name
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input 
        type="text" 
        required 
        value={playerName} 
        onChange={handleChange} 
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

export default Player;
