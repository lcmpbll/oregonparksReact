import React, {useState, useEffect } from 'react';
import ParksList from './ParksList';
function AllParks() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allParks, setAllParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);
 
  

  useEffect(() => {
   
    fetch(`https://localhost:5001/api/v1/Parks/All`)
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
      }
    }

    const handleChangingSelectedPark = (id) => {
      const selectedPark = allParks.filter((park) => park.id === id)[0];
      console.log(selectedPark);      
      setSelectedPark(selectedPark);
    }
  
   let currentlyVisibleState = null;
   let buttonText = "null"; 
  if(error) {
    currentlyVisibleState = <h1>Error: {error}</h1>;
  } else if(!isLoaded) {
    currentlyVisibleState = <h1>...Loading...</h1>;
  } else { 
    currentlyVisibleState = <ParksList parkList={allParks} onParkSelection={handleChangingSelectedPark} />
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}

export default AllParks;