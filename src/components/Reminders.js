import React from 'react'
import '../public/css/Reminders.css'
import Header from './header/Header'

const Reminders = () => {

    return(
        <div id="reminders" className="background-g-b">
            <Header>
                <span>Reminders</span>
            </Header>
        </div>
    );
}

export default Reminders;