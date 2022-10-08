import React, {useState} from 'react';

function ParkDetails(props){
  const [checkBox, setCheckBox] = useState('')
  
  const{ park } = props;
  const detailsStyles ={
    border: '10px solid black',
  }
  const descriptionStyles={
    
  }
  const parkDetailsStyles = {
    display: 'flex',
    // flexDirection: 'row',
  }
  
  // const dogCheck = (park) => {
  //   if(park.dogsAllowed === true){
  //     setCheckBox("Dogs are allowed!");
  //   } else {
  //     setCheckBox("Dogs are not allowed in all areas.");
  //   }
  // }
  // dogCheck(park);
  return (
    <React.Fragment>
      <div styles={detailsStyles}>
        <h1>Park Details</h1>
        <h2>{park.name}</h2>
        <div style={descriptionStyles}>
          <p>{park.description}</p>
        </div>
        <div style={parkDetailsStyles}>
          {/* <div><p>Dogs Allowed: {park.dogsAllowed}</p></div> &nbsp; */}
          <div><p>Location: {park.location}</p></div> &nbsp;
          <div><p>Managed by: {park.parkMgmt}</p></div> &nbsp;
        </div>
      </div>
    </React.Fragment>
  );
}

export default ParkDetails;