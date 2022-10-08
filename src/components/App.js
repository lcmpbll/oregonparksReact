import Footer from './Footer';
import React from 'react';
import AllParks from './AllParks';
import '../App.css';
import Header from './Header';
import background from '../img/wild.jpeg';

function App() {
  const mainStyle={
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',

    border: '2px solid black',
  
    display: 'flex',
    color: 'green'
  }
  return (
    <React.Fragment>
      <Header />
      <div style={mainStyle}>
        <h1>Parks</h1>
        <AllParks />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
