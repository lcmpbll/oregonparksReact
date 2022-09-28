
import React from 'react';
import AllParks from './AllParks';
import '../App.css';
import Header from './Header';
import background from '../img/wild.jpeg';

function App() {
  const mainStyle={
    backgroundImage: `url(${background})`,
    height: '1000px',
    color: 'white'
  }
  return (
    <React.Fragment>
      <Header />
      <div style={mainStyle}>
        <AllParks />
      </div>
    </React.Fragment>
  );
}

export default App;
