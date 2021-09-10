// import logo from './logo.svg';
import './App.css';
// import "../src/Css/Css.css"

import React, {useState} from 'react';

function App() {
  return (
    <div className="App">
     <Navbar>
       <NavItem icon={<i style={{fontSize:"190%"}} class="fas fa-bell"></i>} />
       <NavItem icon={<i style={{fontSize:"190%"}} class="fas fa-bell"></i>} />
       <NavItem icon={<i style={{fontSize:"190%"}} class="fas fa-bell"></i>} />
     </Navbar>
    </div>
  );
}


function Navbar( props ) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>

     
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState();
  return (
    <div className="nav-item">
     <a herf="#" className="icon-button">
      {props.icon}
     </a>
    </div>
  );
}

export default App;
