import React from "react";

const Character = props => {
  return <li className='list__item'>{props.character.name}</li>
};

export default Character;
