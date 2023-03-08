import "../Styles/Header.css"
import React, {useState} from "react";

function Header() {
    const [show, setShow] = useState(false)

    function click_Button() {
        setShow(!show)
    }

    return (
        <div className="Header-X">
            <div>
                Company logo
            </div>

            <div className="Nav-Buttons">
                <button onClick={click_Button}>Home</button>
                <button>Edu</button>
                <button>Learn</button>
                <button>About</button>
            </div>

            {show == true && (
                <div className="show-hide">Show-Hide</div>
            )}
            
        </div>
    )
}

export default Header;