import { useState } from "react";
import imges from "./images/images/logo.svg"
import { ImCross } from "react-icons/im";

function Header() {
    const [showText, setDataShow] = useState(null);
    return <><div id='navBar'>
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
            <span id='CrossIcons' onClick={() => toggleSection(1)}><ImCross /></span>

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

        </div></>
}
export default Header