import React from "react";
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './styles.scss'

function CharacterDetails(props) {
  if (!props.data) { return ('Loading...')}
  else {
    const { name, house, yearOfBirth, image, alive, patronus } = props.data;
    return (
      <div className='CharacterDetails__page'>
        <div className='CharacterDetails__image' style={{backgroundImage: `url(${image})`}} alt={name}></div>
        <section className='CharacterDetails__info'>
        <h1 className='CharacterDetails__name'>{name}</h1>
        <div className={house? `CharacterDetails__house ${house}__crest`: 'hidden'}></div>
        <p>Year of birth: {yearOfBirth}</p>
        <p>Patronus: {patronus}</p>
        <p>State: {alive? 'Alive at the end of the saga': 'Dead at the end of the saga' }</p>
        <Link className='CharacterDetails__back' to='/'>Go back</Link>
        </section>
      </div>
    );
  }
  }


CharacterDetails.propTypes={
    data: propTypes.object,
}

export default CharacterDetails;