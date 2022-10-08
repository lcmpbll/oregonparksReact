import React, {useState, useEffect } from 'react';
import ParksList from './ParksList';
import ParkDetails from './ParkDetails';
function AllParks() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allParks, setAllParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  
  console.log(selectedPark + "I am the selected park");

  useEffect(() => {
    fetch(`http://localhost:5000/api/v2/Parks/All`)
        .then(response => {
          console.log(response);
          if(!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        })
        .then((jsonifiedResponse) => {
          setAllParks(jsonifiedResponse)
          console.log(jsonifiedResponse);
          setIsLoaded(true)
        })
        .catch((error) => {
          setError(error.message)
          setIsLoaded(true)
        });
    }, []) 
    
    const handleClick = () => {
      if(selectedPark != null) {
        setSelectedPark(null);
        setSelectedId(null);
      }
    }

    const handleChangingSelectedPark = (parkId) => {
      const selection = allParks.filter(park => park.parkId === parkId)[0];
      setSelectedId(parkId);
      console.log(selection);
      setSelectedPark(selection);
    }
  const pageStyle = {
    marginTop: '10px'
  }
   let currentlyVisibleState = null;
   let buttonText = "Enter"; 
  
  if(error) {
    currentlyVisibleState = <h1>Error: {error}</h1>;
  } else if(!isLoaded) {
    currentlyVisibleState = <h1>...Loading...</h1>;
  } else if(selectedPark !== null){
    currentlyVisibleState = <ParkDetails park={selectedPark} />
    buttonText = "Return to all parks";
  } else { 
    currentlyVisibleState = <ParksList parkList={allParks} onParkSelection={handleChangingSelectedPark} />
  }
  return (
    <React.Fragment>
      <div style={pageStyle}>
        {currentlyVisibleState}
        {<button onClick={handleClick}>{buttonText}</button>}
      </div>
    </React.Fragment>
  );
  
}

export default AllParks;