import React from 'react'
import '../public/css/Home.css'
import User from './User'
import Header from './header/Header'
const Home = (props) => {

    return(
        <div id="home" className="background-v-p">
            <Header>
                <User></User>
            </Header>
        </div>
    );
}

export default Home;