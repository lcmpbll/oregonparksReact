import React from "react";

function Footer() {
  const footerStyle ={
    color: 'gray',
    textAlign: 'left'
    }
  const linkStyle ={
    textDecoration:"none"
  }
  return (
    <React.Fragment>
      <div style ={footerStyle}>
      <h3>Links</h3>
      <div style ={linkStyle}>
      <a href="https://www.nps.gov/state/or/index.htm">National Parks Service</a>
      <br></br>
      <a href="https://stateparks.oregon.gov/">Oregon State Parks</a>
      <br></br>
      <a href="https://www.oregon.gov/odf/pages/index.aspx">Oregon Department of Forestry</a>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
