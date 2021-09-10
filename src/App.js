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
       <NavItem icon={<i style={{fontSize:"190%"}} class="fas fa-bell"></i>}>
         <DropdownMenu/>
       </NavItem>    
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
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
     <a herf="#" className="icon-button" onClick={()=> setOpen(!open)}>
      {props.icon}
     </a>
     {open && props.children}
    </li>

    
  );
}

function DropdownMenu() {


  function DropdownItem(props) {
    
    return (
     <a herf="#" className="menu-item">
     <span className="icon-button">{props.leftIcon}</span>
     <span>  {props.children} </span>
       <span className="icon-right">{props.rightIcon}</span>
     </a>
      
    );
  }
  
 
  return (
    <div className="dropdown">
      <DropdownItem>My profile</DropdownItem>
      <DropdownItem
      leftIcon={<i class="fas fa-bell"></i>}
      >

      </DropdownItem>
      <DropdownItem>My profile</DropdownItem>
      <DropdownItem
      rightIcon={<i class="fas fa-bell"></i>}
      >

      </DropdownItem>
    </div>

    
  );
}


export default App;
