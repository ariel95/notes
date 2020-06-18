import React from 'react'
import '../public/css/Home.css'
import User from './User'
import Header from './Header'
import Menu from './Menu'
import Dropdown from 'react-bootstrap/Dropdown'
const Home = (props) => {

    return(
        <div id="home" className="background-v-p">
            <Header>
                <User></User>
                <Menu>
                    <Dropdown.Item href="/home">Home</Dropdown.Item>
                    <Dropdown.Item href="/calendar">Calendar</Dropdown.Item>
                    <Dropdown.Item href="/notes">Notes</Dropdown.Item>
                    <Dropdown.Item href="/habits">Habits</Dropdown.Item>
                    <Dropdown.Item href="/reminders">Reminders</Dropdown.Item>
                    <Dropdown.Item href="/task">Task</Dropdown.Item>
                </Menu>
            </Header>
        </div>
    );
}

export default Home;