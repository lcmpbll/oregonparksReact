import React from "react";
import PropTypes from 'prop-types';

function ParkDetail(props) {
  const {park} =props ;
  return (
    <React.Fragment>
    <h1>{park.name}</h1>
    <h2>{park.location}</h2>
    <p>{park.description}</p>
    <hr/>

    </React.Fragment>
  )
}

ParkDetail.propTypes = {
  park: PropTypes.object,

};

export default ParkDetail;

