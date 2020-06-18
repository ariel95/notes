import React, {useState} from 'react'

//COMPONENTS
import { Calendar as CalendarP } from 'primereact/calendar';

//CSS
import '../public/css/Calendar.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import Header from './Header';


const Calendar = (props) => {
    const today = new Date();
    const year = today.getFullYear();
    const yearRange = (year-5).toString() + ":" + (year+5).toString();
    const [date, setDate] = useState(null);
    
    return(
        <div id="calendar" className="background-p-o">
            {/* <Menu></Menu>
            <h1>Calendar</h1> */}
            <Header>
                <span>Calendar</span>
            </Header>
            <CalendarP value={date} onChange={(e) => setDate(e.value)} inline={true} showWeek={false} monthNavigator={true} yearNavigator={true} yearRange={yearRange} />
        </div>
    );
}

export default Calendar;