import React, {useState} from 'react'

//COMPONENTS
import Menu from './Menu'
import { Calendar as CalendarP } from 'primereact/calendar';

//CSS
import '../public/css/Calendar.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';


const Calendar = (props) => {
    const today = new Date();
    const year = today.getFullYear();
    const yearRange = (year-5).toString() + ":" + (year+5).toString();
    const [date14, setDate14] = useState(null);
    
    return(
        <div id="calendar" className="background-p-o">
            <Menu></Menu>
            <h1>Calendar</h1>
            <CalendarP value={date14} onChange={(e) => setDate14(e.value)} inline={true} showWeek={false} monthNavigator={true} yearNavigator={true} yearRange={yearRange} />
        </div>
    );
}

export default Calendar;