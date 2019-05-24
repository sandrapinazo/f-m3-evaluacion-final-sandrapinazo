import React from 'react';
import propTypes from 'prop-types';

function Filter(props) {
    return(
        <form>
            <label></label>
            <input type='text' onChange={props.handler} />
        </form>
    );
}

Filter.propTypes = {
    handler: propTypes.func,
}

export default Filter;