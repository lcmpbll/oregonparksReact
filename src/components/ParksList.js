import React from "react";


function ParksList(props) {
  return (
    <React.Fragment>
      <h1>Oregon State and National Parks</h1>
      <ul>
        {props.parkList.map((park) =>
        <li key={park.id}>
          <h3>{park.name}</h3>
          </li>)}
      </ul>
    </React.Fragment>
  )
}

ParksList.propTypes = {

}

export default ParksList;