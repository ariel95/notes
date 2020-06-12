import React, { useEffect } from 'react';
import './App.css';

//COMPONENTS
import Calendar from './components/Calendar'
import Habits from './components/Habits'
import Notes from './components/Notes'
import Reminders from './components/Reminders'
import Task from './components/Task'

//COMPONENTS EXT
import { Carousel } from 'react-responsive-carousel';

//CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {

  useEffect(()=>{
    document.getElementsByClassName('carousel-status')[0].remove();
    document.getElementsByClassName('carousel')[1].remove();
  },[])

  return (
    <div className="App">
      <Carousel>
        <Calendar></Calendar>
        <Notes></Notes>
        <Habits></Habits>
        <Reminders></Reminders>
        <Task></Task>
      </Carousel>

    </div>
  );
}

export default App;
