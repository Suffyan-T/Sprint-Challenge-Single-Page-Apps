import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log("Character Data=", res.data.results);
      setCharacter(res.data.results);
    })
    .catch(error => {
    console.log(error);
  });
  }, []);

  return (
    <section className="character-list grid-view">
      {character.map(char => {
        return <CharacterCard key={char.id} char={char} />;
      })}
    </section>
  );
}
