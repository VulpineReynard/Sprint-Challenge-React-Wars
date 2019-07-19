import React from 'react';
import styled from "styled-components";

const CharacterName = styled.h2`
  text-align: center;
  margin: 5px auto;
  `;
const CharacterHeight = styled.p`

`;

const CharacterBirthYear = styled.p`

`;

const CharacterEyeColor = styled.p`

`;

const CharacterFilms = styled.ul`

`;

const Film = styled.li`

`;

export default function CharacterCard({character}) {
  return (
    <div className="card">
      <CharacterName>{character.name}</CharacterName>
      <CharacterHeight>Height: {character.height} in.</CharacterHeight>
    </div>
  );
}