import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

function CharacterCard (props) {
//    const bgColor = props.house==='Gryffindor'? '#6d0000': props.house==='Slytherin'? '#003a01': props.house==='Ravenclaw'? '#01053a': props.house==='Hufflepuff'? '#c19a24' : 'grey';
    return (
        <div className="CharacterCard__card" >
            <div className='CharacterCard__image' style={{backgroundImage: `url(${props.image})`}} alt={props.name}/>
            <h2 className='CharacterCard__name'>{props.name}</h2>
            <p className={`CharacterCard__p ${props.house}`}  >{props.house? props.house : 'no house'}</p>
        </div>
    );
}

CharacterCard.propTypes = {
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    house: propTypes.string,
};

export default CharacterCard;