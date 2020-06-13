import React from 'react'
import '../public/css/Home.css'
import User from './User'
const Home = (props) => {

    return(
        <div id="home" className="background-v-p">
            <User></User>
            <h1>Home</h1>
        </div>
    );
}

export default Home;