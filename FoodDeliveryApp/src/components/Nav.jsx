import React from 'react';
import './Nav.css';

const Nav = () => {
  const handleSearch = () => {
    
    const selectedLocation = document.getElementById('locationselect').value;

    if(selectedLocation=="coimbatore"){
      window.location.href = '/cbe';
    }
    else if(selectedLocation=="trichy"){
      window.location.href = '/trichy';
    }
    else if(selectedLocation=="namakkal"){
      window.location.href = '/namakkal';
    }
    else{
      window.alert("Please select Location !");
    }
  };
  
  return (
    <>
      <div id='navcontainer'></div>
      <div id='heropage'>
        <h1 id='herocontent'>SPEEDY EATS</h1>
        
        <div className="dropdown-search">
          <select id='locationselect'>
            <option value="">Select the location</option>
            <option value="coimbatore">Coimbatore</option>
            <option value="trichy">Trichy</option>
            <option value="namakkal">Namakkal</option>
          </select>
          <button onClick={handleSearch}>SEARCH</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
