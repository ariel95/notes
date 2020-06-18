import React from 'react'
import '../public/css/Habits.css'
import Header from './header/Header'

const Habits = () => {

    return(
        <div id="habits"  className="background-y-g">
            <Header>
                <span>Habits</span>
            </Header>
        </div>
    );
}

export default Habits;