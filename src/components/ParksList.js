import React from "react";
import Park from './Park';


function ParksList(props) {
  const listStyle={
    // marginTop: '10rem'
  }

  return (
    <React.Fragment>
    <div style={listStyle}> 
      <ul>
        {props.parkList.map((park, index) =>
        <li key={index}>
        <Park
          whenParkClicked={props.onParkSelection}
          name={park.name}
          id={park.parkId}
          key={park.parkId}
          />
          </li>
          )}
      </ul>
      </div> 
    </React.Fragment>
  )
}

ParksList.propTypes = {

}

export default ParksList;