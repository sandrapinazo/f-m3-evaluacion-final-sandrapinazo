import React from "react";
import CharacterCard from "../CharacterCard";
import propTypes from 'prop-types';

function CharacterList(props) {
  return (
    <ul>
      <p>Lista</p>
      {props.data.map(item => {
        return (
          <li key={item.id}>
            <CharacterCard name={item.name} house={item.house} image={item.image}/>
          </li>
        );
      })}
    </ul>
  );
}

CharacterList.propTypes = {
    data: propTypes.array.isRequired,
}

export default CharacterList;
