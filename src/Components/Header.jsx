import "../Styles/Header.css"
import React, {useState} from "react";
import Card from "../Re-Used/Card";

function Header() {
    const [show, setShow] = useState(false)

    function click_Button() {
        setShow(!show)
    }

    const cards = [
        {
            title : 'Title 1',
            des : "Description 1"
        },

        {
            title : 'Title 2',
            des : "Description 2"
        },

        {
            title : 'Title 3',
            des : "Description 3"
        },
    ]

    return (
        <div className="Header-Xf">
            {cards.map((singleCard) => (
                <Card Title={singleCard.title} Description={singleCard.des}></Card>
            ))}
        </div>
    )
}

export default Header;