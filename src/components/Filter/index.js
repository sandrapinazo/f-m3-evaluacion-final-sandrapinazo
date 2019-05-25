import React from 'react';
import propTypes from 'prop-types';

function Filter(props) {
    return(
        <form>
            <label htmlFor='filter'>Search character:</label>
            <input name='filter' id='filter' type='text' onChange={props.handler} value={props.value}/>
        </form>
    );
}

Filter.propTypes = {
    handler: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
}

export default Filter;