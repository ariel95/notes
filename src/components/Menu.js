import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {ThreeDotsVertical} from 'react-bootstrap-icons'
import '../public/css/Menu.css'

const Menu = (props) => {

    return (
        <div id="menu">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-menu">
                    <ThreeDotsVertical></ThreeDotsVertical>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {props.children}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Menu;