import React from 'react';

export default function CharacterCard({character}) {
  return (
    <div className="card">
      <h2>{character.name}</h2>
    </div>
  );
}