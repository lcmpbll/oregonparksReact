import React from 'react';
import PropTypes from 'prop-types';

function Park(props){
  return (
    <React.Fragment>
      <div onClick= {() => props.whenParkClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
        <h4>{props.parkMgmt}</h4>
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  );
}


Park.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  parkMgmt: PropTypes.string,
  description: PropTypes.string,
}

export default Park;