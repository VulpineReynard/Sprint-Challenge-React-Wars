import React from 'react';
import CharacterCard from "./CharacterCard";

export default function CharacterGrid(props) {

  // function getFilms() {
  //   console.log(props)
  // }
  // getFilms();

  return (
    <div className="grid">
      {
        props.listOfCharacters.map((character, index) => {
          return <CharacterCard
          key={index}
          character={character}
          name={character.name}
          height={character.height}
          birthYear={character.birth_year}
          eyeColor={character.eye_color}
          films={character.films}
          homeworld={character.homeworld}
          />
        })
      }
    </div>
  );
}