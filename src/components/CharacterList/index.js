import React from "react";
import CharacterCard from "../CharacterCard";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import './styles.scss'

function CharacterList(props) {
  return (
    <ul className="CharacterList__list">
      {props.data.map(item => {
        return (
          <li key={item.id} >
            <Link to={`/${item.id}`} className="CharacterList__link">
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
