import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return<div className='list__card'><Character key={character.name} character={character} /></div>;
      })}
    </ul>
  );
};

export default CharacterList;
