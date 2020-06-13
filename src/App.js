import React, { useEffect } from 'react';
import './App.css';

//COMPONENTS
import Home from './components/Home'
import Calendar from './components/Calendar'
import Habits from './components/Habits'
import Notes from './components/Notes'
import Reminders from './components/Reminders'
import Task from './components/Task'


//COMPONENTS EXT
import { Carousel } from 'react-responsive-carousel';

//HELPERS
import { IsMobile } from './helpers/window'

//CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {

  useEffect(()=>{
    //do something
  },[])


  return (
    <div className="App">
      <Carousel showArrows={!IsMobile()} infiniteLoop={true} showStatus={false} showThumbs={false}>
        <Home></Home>
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
