import React from "react";
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CharacterDetails(props) {
  console.log(props);
  const { name, house, dateOfBirth, image, alive, patronus } = props.data;
  return (
    <div>
        <Link to='/'> Back</Link>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{house}</p>
      <p>{dateOfBirth}</p>
      <p>{patronus}</p>
      <p>{alive? 'Alive at the end of the saga': 'Dead at the end of the saga' }</p>
    </div>
  );
}

CharacterDetails.propTypes={
    data: propTypes.object.isRequired,
}

export default CharacterDetails;