import React from 'react'
import '../public/css/Home.css'
import User from './User'
import Header from './Header'
const Home = (props) => {

    return(
        <div id="home" className="background-v-p">
            {/* <User></User>
            <h1>Home</h1> */}
            <Header>
                <User></User>
            </Header>
        </div>
    );
}

export default Home;