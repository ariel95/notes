import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {ThreeDotsVertical} from 'react-bootstrap-icons'
import '../public/css/Menu.css'

const Menu = () => {

    return (
        <div id="menu">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-menu">
                    <ThreeDotsVertical></ThreeDotsVertical>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/home">Home</Dropdown.Item>
                    <Dropdown.Item href="/calendar">Calendar</Dropdown.Item>
                    <Dropdown.Item href="/notes">Notes</Dropdown.Item>
                    <Dropdown.Item href="/habits">Habits</Dropdown.Item>
                    <Dropdown.Item href="/reminders">Reminders</Dropdown.Item>
                    <Dropdown.Item href="/task">Task</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Menu;