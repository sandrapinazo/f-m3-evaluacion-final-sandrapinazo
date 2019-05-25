import React from 'react';
import propTypes from 'prop-types';
import './styles.scss'

function Filter(props) {
    return(
        <form>
            <label htmlFor='filter'>Search character:</label>
            <input className='Filter__input' name='filter' id='filter' type='text' onChange={props.handler} value={props.value} placeholder="Harry Potter" />
        </form>
    );
}

Filter.propTypes = {
    handler: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
}

export default Filter;