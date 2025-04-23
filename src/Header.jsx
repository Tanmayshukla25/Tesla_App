import { useState } from "react";
import imges from "./images/images/logo.svg"
import { ImCross } from "react-icons/im";

function Header() {
    const [showText, setShowText] = useState(false);
    const [animate, setAnimate] = useState(""); 

    const toggleMenu = () => {
        if (!showText) {
            setShowText(true);
            setAnimate("menu-slide-in");
        } else {
            setAnimate("menu-slide-out");
            setTimeout(() => {
                setShowText(false);
            }, 1000); 
        }
    };

    return (
        <>
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
                        <li><button id='ShowDataBtn' onClick={toggleMenu}>Menu</button></li>
                    </ul>
                </div>
            </div>

            {showText && (
                <div id='MenuBar' className={animate}>
                    <span id='CrossIcons' onClick={toggleMenu}><ImCross /></span>
                    <ul type="none">
                        <li>Model S</li>
                        <li>Model 3</li>
                        <li>Model X</li>
                        <li>Model Y</li>
                        <li>Solar Roof</li>
                        <li>Solar Panel</li>
                        <li>Existing Inventory</li>
                        <li>Used Inventory</li>
                        <li>Trade In</li>
                        <li>Test Drive</li>
                        <li>PowerWall</li>
                        <li>Commercial Energy</li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
