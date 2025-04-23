import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imges from "./images/images/logo.svg"
import dropDown from "./images/images/down-arrow.svg"
import { ImCross } from "react-icons/im";


function App() {
  const [showText, setDataShow] = useState(null);
  const toggleSection = (section) => {
    setDataShow(show => (show === section ? null : section));
  };

  return (
    <>
      <div className='container '>

        <div id='navBar'>
          <div>
            <img src={imges} alt="Tesla Logo" />
          </div>
          <div id='navBarLi'>
            <ul type="none">
              <li><a href="">Model S</a></li>
              <li><a href="">Model 3</a></li>
              <li><a href="">Model X</a></li>
              <li><a href="">Model Y</a></li>
              <li><a href="">Solar Roof</a></li>
              <li><a href="">Solar Panels</a></li>

            </ul>
          </div>

          <div id='navBarLi'>
            <ul type="none">
              <li><a href="">Shop</a></li>
              <li><a href="">Account</a></li>
              <li><button id='ShowDataBtn' onClick={() => toggleSection(1)}>Menu</button></li>
            </ul>
          </div>

        </div>
        <div id='MenuBar' style={{ display: showText === 1 ? 'block' : 'none' }}  >
          <span  id='CrossIcons' onClick={()=>toggleSection(1)}><ImCross /></span>

          <ul type="none">
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panel</li>
            <li>Existing Inventory</li>
            <li>Used Inventory</li>
            <li>Trade In </li>
            <li>Test Drive</li>
            <li>PowerWall</li>
            <li>Commercial Energy</li>
          </ul>

        </div>






        <div id='Model3Section'>


          <div id='Heading'>
            <h1>Model 3</h1>
            <p>order online for toughless delivery</p>
          </div>

          <div id='btnParent'>
            <button id='btn1'>CUSTON ORDER</button>
            <button id='btn2'>EXISTING INVEMTORY</button>
            <div className='one'>
              <img src={dropDown} alt="" />
            </div>
          </div>


        </div>
        <div id='modelY-Section'>
          <div id='Heading'>
            <h1>Model Y</h1>
            <p>order online for toughless delivery</p>
          </div>
          <div id='btnParent'>
            <button id='btn1'>CUSTON ORDER</button>
            <button id='btn2'>EXISTING INVEMTORY</button>
          </div>
        </div>


        <div id='modelS-Section'>
          <div id='Heading'>
            <h1>Model S</h1>
            <p>order online for toughless delivery</p>
          </div>
          <div id='btnParent'>
            <button id='btn1'>CUSTON ORDER</button>
            <button id='btn2'>EXISTING INVEMTORY</button>
          </div>
        </div>

        <div id='modelX-Section'>
          <div id='Heading'>
            <h1>Model X</h1>
            <p>order online for toughless delivery</p>
          </div>
          <div id='btnParent'>
            <button id='btn1'>CUSTON ORDER</button>
            <button id='btn2'>EXISTING INVEMTORY</button>
          </div>
        </div>


        <div id='SolarPanels-Section'>
          <div id='Heading'>
            <h1>Solar panels</h1>
            <p>Lower Cost Solar Panels in India</p>
          </div>
          <div id='btnParent'>
            <button id='btn1'>ORDER NOW</button>
            <button id='btn2'>LEARN MORE</button>
          </div>
        </div>

        <div id='SolarRoof-Section'>
          <div id='Heading'>
            <h1>Solar Roof</h1>
            <p>Produce Clean Energy from your roof</p>
          </div>
          <div id='btnParent'>
            <button id='btn1'>ORDER NOW</button>
            <button id='btn2'>LEARN MORE</button>
          </div>
        </div>

        <div id='Accessories-Section'>
          <div id='Heading'>
            <h1>Accessories</h1>

          </div>
          <div id='btnParent'>
            <button id='btn1'>ORDER NOW</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
