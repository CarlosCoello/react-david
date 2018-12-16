import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
    return(
        <React.Fragment>
            {props.fffff.map((name, i) => {
                return (
                    <option key={i} value={name}>{name}</option>
                )
            })}
        </ React.Fragment>
    )
}

Option.propTypes = {
    fffff: PropTypes.array
}

export default Option;