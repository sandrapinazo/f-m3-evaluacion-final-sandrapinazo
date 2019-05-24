import React from "react";
import CharacterCard from "../CharacterCard";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterList(props) {
  return (
    <ul>
      <p>Lista</p>
      {props.data.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/${item.id}`}>
              <CharacterCard
                name={item.name}
                house={item.house}
                image={item.image}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

CharacterList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CharacterList;
