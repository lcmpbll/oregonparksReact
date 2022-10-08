import React, {useState} from 'react';

function ParkDetails(props){
 
  
  const{ park } = props;
  const detailsStyles ={
    border: '10px solid black',
  }
  const descriptionStyles={
    
  }
  const parkDetailsStyles = {
    display: 'flex',
   
  }
  const dogsAllowed = park.dogsAllowed.toString();
  
  
 
  return (
    <React.Fragment>
      <div styles={detailsStyles}>
        <h1>Park Details</h1>
        <h2>{park.name}</h2>
        <div style={descriptionStyles}>
          <p>{park.description}</p>
        </div>
        <div style={parkDetailsStyles}>
          <div><p>Dogs Allowed: {dogsAllowed}</p></div> &nbsp;
          <div><p>Location: {park.location}</p></div> &nbsp;
          <div><p>Managed by: {park.parkMgmt}</p></div> &nbsp;
        </div>
      </div>
    </React.Fragment>
  );
}

export default ParkDetails;