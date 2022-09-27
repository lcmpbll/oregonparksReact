import React from "react";
import Park from './Park';


function ParksList(props) {
  return (
    <React.Fragment>
      <h1>Oregon State and National Parks</h1>
      <ul>
        {props.parkList.map((park, index) =>
        <li key={index}>
        <Park
          whenParkClicked={props.onParkSelection}
          name={park.name}
          id={park.id}
          key={park.id}
          />
          </li>
          )}
      </ul>
    </React.Fragment>
  )
}

ParksList.propTypes = {

}

export default ParksList;