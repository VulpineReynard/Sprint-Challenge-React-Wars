import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [listOfCharacters, setListOfCharacters] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
        .then(response => {
          console.log(response.data.results);
          console.log(response);

          setListOfCharacters(response.data.results);
          })
        }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterGrid listOfCharacters={listOfCharacters}/>
    </div>
  );
}

export default App;
