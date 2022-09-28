import React from 'react';
import parks from '../img/parks.png';
import statePark from '../img/oregonLogo.png';

function Header() {
  const headerStyle ={
    display: 'flex',
    marginLeft: '5px',
  }
  const logoStyle = {
    marginRight: '5px',
  }
  const logoStyle2 = {
    marginRight: '5px',
    marginTop: '7px',
  }
  return (
    <React.Fragment>
     <div style={headerStyle}>
      <div style={logoStyle}>
        <img src={parks} width='50px' alt='National Parks Service Crest.'/>
      </div>
      <div style={logoStyle2}>
        <img src={statePark} width='50px' alt='Oregon State Parks Crest.'/>
      </div>
      <div>
         <h1>Oregon State and National Parks</h1>
      </div>
    </div> 
    </React.Fragment>
  )
}

export default Header;