import React from 'react'
import '../public/css/Reminders.css'
import Menu from './Menu'

const Reminders = () => {

    return(
        <div id="reminders" className="background-g-b">
            <Menu></Menu>
            <h1>Reminders</h1>
        </div>
    );
}

export default Reminders;