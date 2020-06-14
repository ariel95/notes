import React from 'react'
import '../public/css/Calendar.css'
import Menu from './Menu'

const Calendar = (props) => {

    return(
        <div id="calendar" className="background-p-o">
            <Menu></Menu>
            <h1>Calendar</h1>
        </div>
    );
}

export default Calendar;