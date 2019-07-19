import React from 'react';
import styled from "styled-components";
import axios from "axios";

axios.get("https://swapi.co/api/films/")
  .then(response => {
    console.log(response.data.results);
    let arrayOfFilms = response.data.results;
  })

const CharFactsContainer = styled.div`
  opacity: .7;
  padding: 10px;
  background: tomato;
`;

const CharacterName = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 10px auto;
  `;
const CharacterHeight = styled.p`
  text-align: center;
  margin: 5px auto;
`;

const CharacterBirthYear = styled.p`
  text-align: center;
  margin: 5px auto;
`;

const CharacterEyeColor = styled.p`
  text-align: center;
  margin: 5px auto;
`;

const CharacterFilms = styled.ul`
  text-decoration: underline;
`;

const Film = styled.li`
  text-decoration: none;
`;

export default function CharacterCard({character}) {
  return (
    <div className="card">
      <CharacterName>{character.name}</CharacterName>
      <CharFactsContainer>
        <CharacterHeight>Height: {character.height} in.</CharacterHeight>
        <CharacterBirthYear>Born: {character.birth_year}</CharacterBirthYear>
        <CharacterEyeColor>Eye Colour: {character.eye_color}</CharacterEyeColor>
      </CharFactsContainer>
      <CharacterFilms>Featured Films
        {
          character.films.map((film, index) => <Film key={index}>{film}</Film>)
        }
      </CharacterFilms>
    </div>
  );
}