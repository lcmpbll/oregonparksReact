import Footer from './Footer';
import React from 'react';
import AllParks from './AllParks';
import '../App.css';
import Header from './Header';
import background from '../img/wild.jpeg';

function App() {
  const mainStyle={
    backgroundImage: `url(${background})`,
    border: '2px solid black',
  
    display: 'flex',
    color: 'white'
  }
  return (
    <React.Fragment>
      <Header />
      <div style={mainStyle}>
        <AllParks />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
