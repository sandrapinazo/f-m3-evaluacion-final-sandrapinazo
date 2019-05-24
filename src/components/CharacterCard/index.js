import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

function CharacterCard (props) {
    return (
        <div>
            <img className='image' src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>{props.house}</p>
        </div>
    );
}

CharacterCard.propTypes = {
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    house: propTypes.string,
};

export default CharacterCard;